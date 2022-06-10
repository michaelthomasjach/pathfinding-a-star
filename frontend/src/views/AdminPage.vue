<template>
  <div class="home-page">
    <AdminComponent />
    <button class="btn btn-primary btn-lg m-t-10" v-on:click="logout()">
                Se déconnecter
              </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AdminComponent from "@/components/admin/AdminComponent.vue"; // @ is an alias to /src

import { Action } from "s-vuex-class";

@Options({
  components: {
    AdminComponent,
  },
})
export default class AdminPage extends Vue {
  @Action("requestLogout") requestLogout: any;

  logout() {
    this.requestLogout();
    this.$router.push("/login");
  }
}
</script>
