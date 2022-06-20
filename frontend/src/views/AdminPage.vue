<template>
  <ListAllComponents />
  <button class="btn btn-primary btn-lg m-t-10" v-on:click="logout()">
    Se déconnecter
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListAllComponents from "@/components/admin/ListAllComponents.vue"; // @ is an alias to /src

import { Action } from "s-vuex-class";

@Options({
  components: {
    ListAllComponents,
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
