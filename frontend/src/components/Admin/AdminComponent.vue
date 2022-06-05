<template>
  <div>
    {{ getUser }}
    <button @click="changeUserInformations()">changeUserInformations</button>
    </div>
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

  changeUserInformations() {
    if (this.$store.getters.getUser === undefined) {
      console.warn("Vous devez être connecté pour effectuer cette action.");
      return;
    }
    this.requestUserInformations({
      token: this.$store.getters.getUser.token,
    }).then((res: any) => {
      console.log("RESPONSE :", res);
    });
  }
}
</script>
