<template>
  <div class="dropzone">
      <div class="dropzone-content" v-bind="getRootProps()">
        <input v-bind="getInputProps()" >
        <div class="dz-default dz-message"> </div>
      </div>
  </div>
</template>

<script lang="ts">
import { useDropzone } from "vue3-dropzone";
import { Vue } from "vue-class-component";

export default class DropzoneComponent extends Vue {
  getRootProps: any = null;
  getInputProps: any = null;
  rest: any = null;
  beforeMount() {
    // eslint-disable-next-line
    function onDrop(acceptFiles: any, rejectReasons: any) {
      console.log(acceptFiles);
      console.log(rejectReasons);
    }
    // eslint-disable-next-line
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });
    this.getRootProps = getRootProps;
    this.getInputProps = getInputProps;
    this.rest = rest;
  }
}
</script>

<style scoped lang="scss">
.dropzone {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: rgba(0,0,0,0.03);
  .dropzone-content {
    height: 100%;
    width: 100%;
    .dz-default {
      &.dz-message {
        opacity: 1;
        -ms-filter: none;
        filter: none;
        -webkit-transition: opacity 0.3s ease-in-out;
        -moz-transition: opacity 0.3s ease-in-out;
        -o-transition: opacity 0.3s ease-in-out;
        -ms-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        background-image: url("./assets/dropzone.png");
        background-repeat: no-repeat;
        background-position: 0 0;
        position: absolute;
        width: 428px;
        height: 123px;
        margin-left: -214px;
        margin-top: -61.5px;
        top: 50%;
        left: 50%;
      }
    }
  }
}
</style>
