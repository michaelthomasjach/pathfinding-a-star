import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PublicWrapper from "../components/PageStructure/PublicWrapper.vue";
import AdminWrapper from "../components/PageStructure/AdminWrapper.vue";
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
      name: "home",
      component: PublicWrapper,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "/",
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
      name: "admin",
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
