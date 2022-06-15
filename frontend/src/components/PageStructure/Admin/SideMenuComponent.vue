<template>
  <div class="side-menu">
    <div class="top-level-menu">
      <div class="content">Mike</div>
    </div>
    <div class="content-menu">
      <div class="item">
        <span class="title">Title</span>
        <span class="icon">x</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SideMenuComponent extends Vue {
}
</script>

<style scoped lang="scss">
.side-menu {
  position: fixed;
  display: block;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: #2B303B;
  color: #929aac;
  transition: 0.08s ease-in;
  transform: translate3d(-230px, 0, 0);
  font-size: 13px;
  z-index: 101;

  &:hover  {
    transform: translate3d(0, 0, 0);
  }

  &.expand {
    transform: translate3d(0, 0, 0);
  }

  .top-level-menu {
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #272B35;
    .content {
      position: relative;
      width: 100%;
    }
  }

  .content-menu {
    padding: 32px;

    .item {
      position: relative;
      display: flex;
      &:hover {
        color: #fff;
      }
      .title {

      }
      .icon {
        position: relative;
        display: flex;
        align-items: end;
        width: 100%;
        justify-content: flex-end;
      }
    }
  }
}
</style>
