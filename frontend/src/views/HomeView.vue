<template>
  <div class="home">
    <div class="grid-wrapper">
      <div v-for="row in grid" v-bind:key="row.rowIndex" class="row">
        <div v-for="(cell) in row"
          v-bind:key="cell.blockIndex"
          class="block"
          :class="cell.status.toLowerCase()">
            {{ cell }}
        </div>
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
  private gridArray = [];

  @Action("requestGrid") requestGrid: any;

  @Getter("getGrid") getGrid: any;

  get grid() {
    return this.gridArray;
  }

  mounted() {
    this.requestGrid().then((res: []) => {
      // this.text = this.getGrid;
      this.gridArray = res;
    });
  }
}
</script>

<style scoped lang="scss">
.grid-wrapper {
  display: block;
  margin: auto;

  .row {
    display: flex;
    margin: auto;
    height: auto;
    width: auto;

    .block {
      width: 100px;
      height: 100px;
      border: 1px solid #000;

      &.empty {
        background: white;
      }
      &.wall {
        background: red;
      }
      &.start {
        background: green;
      }
      &.end {
        background: yellow;
      }
    }
  }
}
</style>
