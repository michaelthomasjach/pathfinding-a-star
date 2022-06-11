<template>
  <div class="radio-button-group">
    <CheckboxComponent
      v-for="option in options"
      :key=option
      :value=option
      color="primary"
      type="radio"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CheckboxComponent from "@/components/components-library/checkbox/CheckboxComponent.vue";

@Options({
  components: {
    CheckboxComponent,
  },
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
})
export default class InputComponent extends Vue { }
</script>

<style lang="scss">
</style>
