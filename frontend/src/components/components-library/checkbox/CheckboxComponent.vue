<template>
  <div
    :class="[
      typeInput,
      disabled ? '' : color
    ]"
    class="form-check">
    <input
      :type="typeInput == 'radio' ? 'radio' : 'checkbox'"
      :value="value"
      :indeterminate=indeterminate
      :id="idLabel"
      :checked="checked"
      :disabled="disabled"
      @change="$parent.$emit('update:modelValue', $event.target.value)"
      name="radio-input">
    <label :for="idLabel">
      {{ value }}
      <input style="display: none;">
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

// eslint-disable-next-line no-shadow
export enum TypeInput {
  CHECKBOX = "checkbox",
  SWITCH = "switch",
  SWITCH_LARGE = "switch-lg",
  RADIO = "radio",
}

@Options({
  components: {},
  props: {
    checked: Boolean,
    value: String,
    type: TypeInput,
    color: CheckboxColor,
    switchBtn: Boolean,
    switchBtnLarge: Boolean,
    indeterminate: Boolean,
    disabled: Boolean,
  },
})
export default class CheckboxComponent extends Vue {
  // eslint-disable-next-line no-undef
  [x: string]: any;

  id = 0;
  inputType = "";

  beforeMount() {
    this.id = Math.floor(Math.random() * 100000);
  }

  mounted() {
    switch (this.type) {
    case TypeInput.CHECKBOX:
      this.inputType = TypeInput.CHECKBOX;
      break;
    case TypeInput.RADIO:
      this.inputType = TypeInput.RADIO;
      break;
    case TypeInput.SWITCH:
      this.inputType = TypeInput.SWITCH;
      break;
    case TypeInput.SWITCH_LARGE:
      this.inputType = `${TypeInput.SWITCH} ${TypeInput.SWITCH_LARGE}`;
      break;
    default:
      this.inputType = TypeInput.CHECKBOX;
      break;
    }
  }

  get typeInput() {
    return this.inputType;
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

  &.switch {
    input[type="checkbox"][disabled] + label:after {
      background: #ececec !important;
    }

    &.switch-lg {
      input[type="checkbox"] + label {
        padding-left: 42px;
      }

      input[type="checkbox"] + label:before {
        width: 34px;
        height: 22px;
        top: 0px;
      }

      input[type="checkbox"] + label:after {
        width: 18px;
        height: 18px;
        top: 2px;
      }

      &.complete input[type="checkbox"] + label:before {
        background-image: linear-gradient(to right, #0072EC 0%,
          #0f8ff9 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);
      }
    }

    input[type="checkbox"] + label {
      padding-left: 34px;
    }

    input[type="checkbox"]:checked + label:before {
      background-position: left;
      box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 12%);
    }

    input[type="checkbox"] + label:before {
      cursor: pointer;
      width: 26px;
      height: 18px;
      top: 2px;
      background-image: -webkit-linear-gradient(to right, #7252D3 0%,
        #845ae0 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);
      background-image: -moz-linear-gradient(to right, #7252D3 0%,
        #845ae0 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);
      background-image: linear-gradient(to right, #7252D3 0%,
        #845ae0 44%, rgba(0, 0, 0, 0.14) 62%, rgba(0, 0, 0, 0.04) 97%);
      background-size: 300%;
      background-position: right;
      border-radius: 50px;
      border: none;
      box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 12%);
      transition: background 310ms, box-shadow 250ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    input[type="checkbox"]:checked + label:after {
      transform: translateX(calc(100% - 6px));
      box-shadow: 1px 1px 0px rgb(0 0 0 / 8%), -3px 3px 6px rgb(0 0 0 / 30%);
    }

    input[type="checkbox"] + label:after {
      transform: translateX(0%);
      background: #fff;
      top: 4px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 9px;
      box-shadow: 1px 0px 1px 0.5px rgb(0 0 0 / 12%), 2px 4px 6px rgb(0 0 0 / 20%);
      transition: transform, box-shadow;
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.primary input[type="radio"]:checked + label:before {
    border-color: #7252D3;
  }
  &.complete input[type="radio"]:checked + label:before {
    border-color: #0072EC;
  }
  input[type="radio"] {
    opacity: 0;
    position: absolute;
    top: 3px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    padding: 0;

    & + label:before {
      bottom: 2.5px;
      border-radius: 99px;
      -webkit-transition: border 0.3s 0s cubic-bezier(0.455, 0.03, 0.215, 1.33);
      transition: border 0.3s 0s cubic-bezier(0.455, 0.03, 0.215, 1.33);
    }
    &:checked + label:before {
      border-color: #757575;
      border-width: 5px;
    }

    & + label:after {
      content: "";
      display: none;
    }
  }

  input[type="checkbox"][disabled] + label:before {
    cursor: not-allowed !important;
    background: #ececec !important;
  }

  input[type="checkbox"][disabled] + label:after {
    cursor: not-allowed !important;
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
