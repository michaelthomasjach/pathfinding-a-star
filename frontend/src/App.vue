<template>
  <div>
    <HeaderComponent class="header"/>
    <div class="page">
      <router-view/>
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
body {
  margin: 0;
  padding: 0;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .header {
    z-index: 1;
  }
  .page {
    position: relative;
    display: block;
    padding: 50px;
    margin-top: 92px;
    height: 5000px;

  }
}

</style>
