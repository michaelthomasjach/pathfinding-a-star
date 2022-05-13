<template>
  <nav class="header">
    hello je suis le header
    <router-link to="/">Home</router-link> |
    <router-link to="/a-star">A star</router-link>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HeaderComponent extends Vue {

}
</script>

<style scoped lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  background: red;
  width: 100%;
  padding: 35px;
}
</style>
