<template>
  <div class="home">
    <div class="grid-wrapper">
      <div v-for="row in grid" v-bind:key="row.rowIndex" class="row">
        <div
          v-for="cell in row"
          v-bind:key="cell.blockIndex"
          class="block"
          :class="cell.status.toLowerCase()"
        >

          <div class="path-wrapper" v-for="(path, idx) in astarRes" v-bind:key="idx">
            <div class="path" v-if="path.id == cell.id"></div>
          </div>

          <div>id: {{ cell.id }}</div>
          <div>G: {{ cell.g }}</div>
          <div>H: {{ cell.h }}</div>
          <div>F: {{ cell.f }}</div>
          <!--
            <div>x: {{ cell.x }}</div>
            <div>y: {{ cell.y }}</div>

          neighborIDs =
          <span v-for="neighbor in cell.neighborsIDs" v-bind:key="neighbor">
             {{ neighbor }} /
          </span>
          -->
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
  private astarArray = [];

  @Action("requestGrid") requestGrid: any;

  @Getter("getGrid") getGrid: any;

  get grid() {
    return this.gridArray;
  }

  get astarRes() {
    return this.astarArray;
  }

  mounted() {
    this.requestGrid().then((res: any) => {
      this.gridArray = res.grid;
      this.astarArray = res.astar;
    });
  }
}
</script>

<style scoped lang="scss">
.grid-wrapper {
  display: block;
  margin: auto;
  font-size: 12px;

  .row {
    display: flex;
    margin: auto;
    height: auto;
    width: auto;

    .block {
      position: relative;
      width: 180px;
      height: 180px;
      border: 1px solid #000;

      .path-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        .path {
          width: 20px;
          height: 20px;
          background-color: purple;
        }
      }

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
