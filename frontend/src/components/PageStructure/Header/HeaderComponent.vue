<template>
  <nav class="header">
    <div class="header-wrapper">
      <div class="avatar-wrapper">
        <div class="avatar"></div>
        <span class="name">{{ getUser ? `${getUser.firstname} ${getUser.lastname}` : ""}}</span>
      </div>

      <span class="routes">
        <router-link to="/">Home</router-link>
        <div>|</div>
        <router-link to="/astar">A star</router-link>
        <div>|</div>
        <router-link to="/login">Login</router-link>
        <div>|</div>
        <router-link to="/admin">Admin</router-link>
      </span>
    </div>
  </nav>
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
  position: absolute;
  text-align: left;
  padding: 0;
  top: 0;
  left: calc(50% - 750px);
  display: flex;
  align-items: center;
  width: 1500px;
  height: 130px;
  background: #f5f5f5;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .2);;

  .header-wrapper {
    display: flex;
    padding: 0px 50px;
    align-items: center;
    flex-direction: row;

    & > * {
      position: relative;
    }

  .avatar-wrapper {
    display: flex;
    align-items: center;
    margin-right: 100px;

    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: green;
      margin-right: 15px;
    }
    .name {
      text-transform: capitalize;
    }
  }

    .routes {
      display: flex;

      & > * {
        margin-right: 15px;
      }
    }
  }

}
</style>
