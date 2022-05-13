<template>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action, Getter } from "s-vuex-class";

@Options({
  components: { },
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
      width: 20px;
      height: 20px;
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
