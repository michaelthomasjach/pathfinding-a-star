<template>
  <LoginComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginComponent from "@/components/public/Login/LoginComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    LoginComponent,
  },
})
export default class LoginPage extends Vue {}
</script>
<style lang="scss">
body {
  height: 100%;
  #app {
    height: 100%;
    .app-wrapper {
      height: 100%;
    }
  }
}
</style>
