<template>
  <div class="home-page">
    <ResumeComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ResumeComponent from "@/components/admin/resume/ResumeComponent.vue"; // @ is an alias to /src

import { Action } from "s-vuex-class";

@Options({
  components: {
    ResumeComponent,
  },
})
export default class AdminResumePage extends Vue {
  @Action("requestLogout") requestLogout: any;

  logout() {
    this.requestLogout();
    this.$router.push("/login");
  }
}
</script>
