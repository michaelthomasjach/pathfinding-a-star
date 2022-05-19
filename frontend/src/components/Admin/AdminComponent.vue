<template>
  <div>
    admin
    <div>{{ userInfo }}</div>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action } from "s-vuex-class";
import { IUser } from "@/store/modules/interfaces";

@Options({
  components: { },
})
export default class AdminComponent extends Vue {
  private user: any = {};

  @Action("requestUserInformations") requestUserInformations: any;

  get userInfo(): IUser {
    return this.user;
  }

  mounted() {
    this.requestUserInformations().then((res: any) => {
      this.user = res;
    });
  }
}
</script>
