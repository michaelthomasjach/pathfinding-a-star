<template>
  <div>header admin</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Getter } from "s-vuex-class";

export default class HeaderComponent extends Vue {
  @Getter("getUser") getUser: any;

  get user() {
    if (this.$store.getters.getUser === undefined) return "";
    return this.$store.getters.getUser.Firstname;
  }
}
</script>
