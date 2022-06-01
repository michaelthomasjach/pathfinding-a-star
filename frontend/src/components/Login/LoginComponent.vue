<template>
  <div class="home-page">
    <div>
      admin
      <div>{{ getUser }}</div>
      <label for="email">
        <input id="email"
               type="text"
               name="email"
               v-model="input.email"
               placeholder="Email" />
        Email
      </label>
      <label for="password">
        <input id="password"
               type="password"
               name="password"
               v-model="input.password"
               placeholder="Password" />
        Password
      </label>
      <button type="button" v-on:click="login()">Login</button>
      <button type="button" v-on:click="logout()">Logout</button>
      <button v-on:click="changeUserInformations()">ChangerUserInfo</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action, Getter } from "s-vuex-class";
import { IUser } from "@/store/modules/interfaces"; // @ is an alias to /src

@Options({
  components: { },
})
export default class LoginComponent extends Vue {
  private email: any = {};
  private input = {
    email: "michael.thomas.jach@gmail.com",
    password: "password",
  }

  @Action("requestLogin") requestLogin: any;
  @Action("requestLogout") requestLogout: any;
  @Getter("getUser") getUser: any;

  get userInfo(): IUser {
    return this.email;
  }

  login() {
    if (this.input.email !== "" && this.input.password !== "") {
      // eslint-disable-next-line max-len
      this.requestLogin({
        email: this.input.email,
        password: this.input.password,
      }).then((res: any) => {
        this.email = res;
      });
    } else {
      console.log("A email and password must be present");
    }
  }

  logout() {
    this.requestLogout();
  }
}
</script>
