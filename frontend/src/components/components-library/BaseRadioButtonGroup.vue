<template>
  <div class="input-group">
    <BaseRadioButton v-for="option in options" :option="option" :key="option" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseRadioButton from "./BaseRadioButton.vue";

@Options({
  components: {
    BaseRadioButton,
  },
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
})
export default class BaseRadioButtonGroup extends Vue { }
</script>
<style scoped>
.input-group {
  width: 35%;
  margin: 20px auto;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
}

label {
  cursor: pointer;
}
</style>
