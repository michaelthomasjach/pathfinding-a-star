<template>
  <div class="login-wrapper">
    <div class="bg-pic">
      <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20"></div>
    </div>
    <div class="login-container bg-white">
      <div class="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
        <img
          src="assets/img/logo-48x48_c.png"
          alt="logo"
          data-src="assets/img/logo-48x48_c.png"
          data-src-retina="assets/img/logo-48x48_c@2x.png"
          width="48"
          height="48"
        />
        <h2 class="p-t-25">
          Let's go ! <br />
          Visite ton Dashboard
        </h2>
        <p class="mw-80 m-t-5">Connecte toi à ton compte</p>
        <form id="form-login" class="p-t-15" role="form" action="index.html">
          <div class="form-group form-group-default">
            <label for="email">
              Email
              <div class="controls">
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="example@example.com"
                  v-model="input.email"
                  class="form-control"
                  required
                />
              </div>
            </label>
          </div>

          <div class="form-group form-group-default">
            <label for="password">
              Mot de passe
              <div class="controls">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  v-model="input.password"
                  placeholder="Mot de passe"
                  required
                />
              </div>
            </label>
          </div>
        </form>
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-6 no-padding sm-p-l-10">
              <div class="form-check m-t-5">
                <label for="checkbox1">
                  <input type="checkbox" value="1" id="checkbox1" />
                  Se souvenir
                </label>
              </div>
            </div>
            <div class="col-md-6 p-r-0 text-right">
              <button class="btn btn-primary btn-lg m-t-10" v-on:click="login()">
                Se connecter
              </button>
            </div>
          </div>

          <div class="col-md-12 m-t-20">
            <div class="m-b-5 m-t-30">
              <a href="#" class="normal">Mot de passe perdu ?</a>
            </div>
            <div>
              <a href="#" class="normal">Pas encore membre ? S'enregistrer maintenant.</a>
            </div>
          </div>
        </div>

        <div class="pull-bottom sm-pull-bottom">
          <div class="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
            <div class="col-sm-12 no-padding m-t-10">
              <p class="small-text normal hint-text">
                Michael Jach. Tou droits réservés.<br />
                <a href="">Cookie Policy</a>, <a href=""> Privacy and Terms</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action } from "s-vuex-class";
import { IUser } from "@/store/modules/interfaces"; // @ is an alias to /src

@Options({
  components: {},
})
export default class LoginComponent extends Vue {
  private email: any = {};
  private input = {
    email: "michael.thomas.jach@gmail.com",
    password: "password",
  };

  @Action("requestLogin") requestLogin: any;

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
        this.$router.push("/admin");
      });
    } else {
      console.log("A email and password must be present");
    }
  }
}
</script>
