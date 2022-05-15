<template>
  <div class="app-wrapper">
    <HeaderComponent class="header"/>
    <div class="page-wrapper">
      <div class="page">
        <div class="page-content">
          <router-view/>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "@/components/PageStructure/Header/HeaderComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    HeaderComponent,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

html, body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;

  font-family: 'Roboto', sans-serif;
}
body {
  #app {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .app-wrapper {
      position: relative;
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
      background-attachment: fixed;
      background-image: url("@/assets/light.jpg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .header {
    z-index: 1;
  }
  .page-wrapper {
    position: relative;
    display: block;
    margin: auto;
    padding-top: 130px;
    height: calc(100% - 180px);
    width: 1500px;
    background: transparent;

    .page {
      padding-top: 100px;
      padding-bottom: 500px;
      height: 100%;
      overflow: auto;

      .page-content {
        padding: 0px;
        background-color: #f5f5f5;
      }
    }
  }
}

</style>
