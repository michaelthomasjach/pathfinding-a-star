<template>
  <div
    :class="color"
    class="form-check">
    <input
      :indeterminate=indeterminate
      type="checkbox"
      :id=idLabel
      ref=idLabel
      :checked=checked>
    <label :for=idLabel>
      {{ label }}
      <input style="display: none">
    </label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

// eslint-disable-next-line no-shadow
enum CheckboxColor {
  PRIMARY = "primary",
  COMPLETE = "complete",
}

@Options({
  components: {},
  props: {
    label: String,
    checked: Boolean,
    color: CheckboxColor,
    indeterminate: Boolean,
  },
})
export default class CheckboxComponent extends Vue {
  // eslint-disable-next-line no-undef
  [x: string]: any;

  id = 0;

  beforeMount() {
    this.id = Math.floor(Math.random() * 100000);
  }

  updated() {
    if (this.indeterminate) {
      const input: HTMLInputElement = this.$refs[this.id] as HTMLInputElement;
      input.indeterminate = true;
    }
  }

  get idLabel() {
    return this.id;
  }
}
</script>

<style lang="scss">
@keyframes checkbox-check {
  0% {
    background-position: 0px;
  }
  100% {
    background-position: -144px;
  }
}

label, input, button, select, textarea {
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
}

button, input {
  overflow: visible;
}

button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.form-check {
  position: relative;
  display: block;
  word-wrap: break-word;
  margin-bottom: 10px;
  padding-left: 0px;

  &.primary input[type="checkbox"]:checked + label::before,
  &.primary input[type="checkbox"]:indeterminate + label::before {
    border-color: #7252D3;
    background-color: #7252D3;
  }

  &.complete input[type="checkbox"]:checked + label:before,
  &.complete input[type="checkbox"]:indeterminate + label::before {
    border-color: #0072EC;
    background-color: #0072EC;
  }

  &.info input[type="checkbox"]:checked + label::after,
  &.danger input[type="checkbox"]:checked + label::after,
  &.complete input[type="checkbox"]:checked + label::after,
  &.primary input[type="checkbox"]:checked + label::after,
  &.success input[type="checkbox"]:checked + label::after {
    background-image: url("./assets/images/checkbox-white.png");
    background-position-x: left;
    background-position-y: center;
  }

  &.info input[type="checkbox"]:indeterminate + label::after,
  &.danger input[type="checkbox"]:indeterminate + label::after,
  &.complete input[type="checkbox"]:indeterminate + label::after,
  &.primary input[type="checkbox"]:indeterminate + label::after,
  &.success input[type="checkbox"]:indeterminate + label::after {
    background-color: #fff;
  }

  input[type="checkbox"] {
    position: absolute;
    margin: 0;
    top: 3px;
    z-index: -1;
    width: 16px;
    height: 16px;
    opacity: 0;
    box-sizing: border-box;
    padding: 0;
  }

  input[type="checkbox"]:indeterminate + label::after {
    background: none;
    background-color: #4b4b4b;
    width: 10px;
    height: 2px;
    top: 6px;
    margin: 3px;
    border-radius: 2px;
  }

  input[type="checkbox"] + label::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0px;
    border-right: 0 solid transparent;
    border-bottom: 0 solid transparent;
    width: 16px;
    height: 16px;
    overflow: hidden;
  }

  input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
  }

  input[type="checkbox"]:checked + label::after {
    content: "";
    background-image: url("./assets/images/checkbox.png");
    background-size: 160px 16px;
    background-position-x: left;
    background-position-y: center;
    background-repeat: no-repeat;
    animation-name: checkbox-check;
    animation-duration: 320ms;
    animation-timing-function: steps(9);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  label {
    transition: border 140ms linear 0s, color 140ms linear 0s, background-color 140ms linear 0s;
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    min-width: 18px;
    min-height: 18px;
    margin-bottom: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif, sans-serif;
    letter-spacing: -0.006em;

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      left: 0px;
      -webkit-box-sizing: inherit;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #c9c9c9;
      top: 2px;
      border-radius: 3px;
      transition: border 140ms linear 0s, color 140ms linear 0s, background-color 140ms linear 0s;
    }
  }
}
</style>
