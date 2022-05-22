<template>
  <LoginComponent/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginComponent from "@/components/Login/LoginComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    LoginComponent,
  },
})
export default class LoginPage extends Vue { }
</script>
