<template>
  <div><button @click="changeUserInformations()">changeUserInformations</button></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action, Getter } from "s-vuex-class";

@Options({
  components: { },
})
export default class AdminComponent extends Vue {
  @Getter("getUser") getUser: any;
  @Action("requestUserInformations") requestUserInformations: any;

  /*
  mounted() {
    this.requestUserInformations().then((res: any) => {
      this.user = res;
    });
  }
  */

  changeUserInformations = () => {
    this.requestUserInformations({
      token: "this.getUser().token",
    }).then((res: any) => {
      console.log("RESPONSE :", res);
    });
  }
}
</script>
