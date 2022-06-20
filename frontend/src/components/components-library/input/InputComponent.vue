<template>
  <div :class="[
    required ? 'required' : '',
    disabled ? 'disabled': '',
    isFocused ? 'is-focused' : ''
    ]"
    class="form-group form-group-default">
    <label for="simple-input">
      {{label}}
      <div class="wrapper">
        <div class="tag-and-input-wrapper">
          <div class="tag-wrapper">
            <span v-for="(tag, idx_tag) in tagInputList"
                  :key="tag"
                  class="tag label"
                  :class="tagColor">
              <!-- eslint-disable -->
              <i
                class="pg-close"
                @click="removeTagItem(idx_tag)">
              </i>
              <!-- eslint-enable -->
              <span>
                {{ tag }}
              </span>
            </span>
          </div>
          <input
            :type=inputType
            v-bind:value=value
            :placeholder=placeholder
            :required=required
            :disabled=disabled
            :tag-input=tagInput
            ref="input_tag"
            @keyup.enter="onEnter"
            @keyup.backspace="onBackspace"
            @input="sendValue"
            @focus="focus"
            @blur="blur"
            class="form-control"
            name="simple-input"
          >
        </div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

// eslint-disable-next-line no-shadow
enum InputDefinition {
  EMAIL = "email",
  TEXT = "text",
  NUMBER = "number",
  PASSWORD = "password",
}

@Options({
  components: {},
  props: {
    label: String,
    inputType: InputDefinition,
    value: String,
    placeholder: String,
    tagInput: Boolean,
    tagColor: {
      required: false,
      type: String,
      default: "primary",
    },
    required: Boolean,
    disabled: Boolean,
  },
})
export default class InputComponent extends Vue {
  isFocused = false;
  tagInputList: Array<string> = [];
  mounted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$emit('update:modelValue', this.value);
  }

  sendValue(event: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$emit('update:modelValue', event.target.value);
  }

  focus() {
    this.isFocused = true;
  }

  blur() {
    this.isFocused = false;
  }

  // eslint-disable-next-line class-methods-use-this
  onEnter(event: any) {
    if (event.target.value === "") return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$emit('update:modelValue', "");
    this.tagInputList.push(event.target.value);
  }

  onBackspace(event: any) {
    this.tagInputList.pop();
  }

  removeTagItem(idx: number) {
    console.log("INDEX :", idx);
    this.tagInputList.splice(idx, 1);
  }
}
</script>

<style lang="scss">
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
  &.is-focused {
    box-shadow: none;
    border: 1px solid #7252D3 !important;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
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
    min-height: 59px;

    .wrapper {
      position: relative;
      display: block;
      margin-top: 3px;
      .tag-and-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        .tag-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          .tag {
            display: inline-flex;
            align-items: center;
            padding: 2px 9px;
            line-height: 18px;
            border-radius: 3px;
            margin: 0px 3px;
            color: white;
            &.label {
              font-size: 11px;
              text-shadow: none;
              font-weight: 600;
              background-color: transparent;
            }
            &.info {
              background-color: #0072EC;
              color: #fff;
            }
            i {
              cursor: pointer;
              margin-top: -1px;
              margin-right: 5px;
            }
          }
        }
        .input {
          display: inline-flex;
        }
      }
    }

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

    .disabled {
      background: #fafafa;
      color: rgba(75, 75, 75, 0.23);
      cursor: not-allowed;
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
      display: inline-flex;
      width: 100%;
      border: none;
      height: 22px;
      min-height: 22px;
      padding: 0;
      margin-top: 0px;
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      transition: background 0.2s linear 0s;
      line-height: 22px;
      font-size: 14px;
      font-weight: normal;
      vertical-align: middle;
      font-family: -apple-system, BlinkMacSystemFont, "Inter UI",
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, sans-serif;
      -webkit-appearance: none;
      color: #212121;
      outline: 0;
    }
  }
}
</style>
