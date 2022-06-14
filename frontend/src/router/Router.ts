import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { IUser } from "@/store/modules/interfaces";
import PublicWrapper from "../components/PageStructure/Public/PublicWrapper.vue";
import AdminWrapper from "../components/PageStructure/Admin/AdminWrapper.vue";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";

export default class Router {
  private routes: Array<RouteRecordRaw>;
  private router: any;

  constructor(store: any) {
    this.routes = this.createRoutes();

    this.router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: this.routes,
    });

    this.router.beforeEach((to: any, from: any, next: any) => {
      if (to.matched.some((route: RouteRecordRaw) => route.meta?.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.

        if (!store.getters.getUser) {
          const token = localStorage.getItem("jwt-token");
          if (token) {
            const tokenWithoutBearer = <string>token?.split(" ")[1];
            const userData: IUser = jwt_decode(tokenWithoutBearer);
            const user = { ...userData, token };
            /**
             * If user reload page then :
             * get the localstorage token and set it to the store
             * to allow navigation to protected route
             */
            // eslint-disable-next-line no-underscore-dangle
            store._actions.refreshUserStoreInformations[0](user);
            next();
          }
          next({ name: "home" });
        } else {
          next(); // go to wherever I'm going
        }
      } else {
        next(); // does not require auth, make sure to always call next()!
      }
    });
  }

  private createRoutes = (): Array<RouteRecordRaw> => [
    {
      path: "/",
      component: PublicWrapper,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "/",
          name: "home",
          component: HomePage,
        },
        {
          path: "/astar",
          name: "astar",
          component: () => import(/* webpackChunkName: "about" */ "../views/AstarPage.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: AdminWrapper,
      children: [
        {
          path: "/admin",
          name: "admin",
          meta: {
            requiresAuth: true,
          },
          component: () => import(/* webpackChunkName: "about" */ "../views/AdminPage.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ];

  getRouter = () => this.router;
}
