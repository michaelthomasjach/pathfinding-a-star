<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>test => {{ label }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action, Getter } from "s-vuex-class";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import { Getter, Action } from 'vuex-class';

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  private text = "test";

  @Action("requestGrid") requestGrid: any;

  @Getter("getGrid") getGrid: any;

  get label() {
    return this.text;
  }

  mounted() {
    this.requestGrid();
    this.text = this.getGrid;
  }

  /*

  test = () => {
    // this.$store.commit('increment');
    // console.log(this.$store.state.count);
  };

  */
}
</script>
