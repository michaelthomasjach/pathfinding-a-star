<template>
  <div
    class="form-group form-group-default"
    :class="required ?  'required' : ''">
    <label for="simple-textarea">
      {{ label }}
      <textarea
        class="form-control textarea-simple"
        name="simple-textarea"
        v-bind:value="defaultValue"
        @input="sendValue"/>
    </label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    label: String,
    defaultValue: {
      required: false,
      type: String,
      default: "",
    },
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
})
export default class TextAeraComponent extends Vue {
  mounted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$emit('update:modelValue', this.defaultValue);
  }

  sendValue(event: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$emit('update:modelValue', event.target.value);
  }
}
</script>

<style scoped lang="scss">
label, input, button, select, textarea {
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
}
*, ::after, ::before {
  box-sizing: border-box;
}
button, input {
  overflow: visible;
}

.form-group {
  &.form-group-default {
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI",
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    position: relative;
    border: 1px solid rgba(33, 33, 33, 0.14);
    border-top-color: rgba(8, 7, 7, 0.14);
    border-radius: 2px;
    padding-top: 5px;
    padding-left: 9px;
    padding-right: 9px;
    padding-bottom: 4px;
    overflow: hidden;
    width: 100%;
    -webkit-transition: background-color 0.2s ease;
    transition: background-color 0.2s ease;
    cursor: text;

    &.required:after {
      color: #D83C31;
      content: "*";
      font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
      font-size: 20px;
      position: absolute;
      right: 10px;
      top: 2px;
    }

    label:not(.error) {
      color: #4b4b4b;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    label {
      margin: 0;
      display: block;
      opacity: 1;
      cursor: text;
      -webkit-transition: opacity 0.2s ease;
      transition: opacity 0.2s ease;
    }
    .form-control {
      display: block;
      width: 100%;
      border: none;
      min-height: 25px;
      padding: 0;
      margin-top: -4px;
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      transition: background 0.2s linear 0s;
      line-height: 16px;
      font-size: 14px;
      font-weight: normal;
      vertical-align: middle;
      font-family: -apple-system, BlinkMacSystemFont, "Inter UI",
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, sans-serif;
      -webkit-appearance: none;
      color: #212121;
      outline: 0;

      &.textarea-simple {
        min-height: 100px;
        resize: vertical;
        margin-top: 8px;
      }
    }
  }
}
</style>
