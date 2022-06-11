<template>
  <label :for="option">
    <input
      type="radio"
      :value="option"
      :id="option"
      @change="$parent.$emit('update:modelValue', $event.target.value)"
      name="radio-input"
    />
    {{ option }}
  </label>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    option: {
      required: true,
      type: String,
    },
  },
})
export default class BaseRadioButton extends Vue { }
</script>

<style scoped>
label {
  cursor: pointer;
}
</style>
