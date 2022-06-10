<template>
  <header class="sticky-header">
    <div class="title"></div>
    <div class="content">
      le content du sticky header
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SideMenuComponent extends Vue {
}
</script>

<style scoped lang="scss">
.sticky-header {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #fff;
  color: #4b4b4b;
  padding-left: 70px;
  align-items: center;

  .title {
    position: relative;
    display: flex;
    height: 100%;
    width: 200px;
    align-items: center;
    background: #0e2231;
  }
  .content {
    position: relative;
    display: flex;
    height: 100%;
    padding-left: 35px;
    align-items: center;
  }
}
</style>
