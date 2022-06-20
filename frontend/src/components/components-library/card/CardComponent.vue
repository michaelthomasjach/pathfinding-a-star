<template>
  <div
    class="card card-default"
    :class="cardColor()">
    <div v-if="title" class="card-header ">
      <div class="card-title">
        {{title}}
      </div>
    </div>
    <div
      class="card-body"
      :class="bodyNoPadding ? 'no-padding' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

// eslint-disable-next-line no-shadow
export enum ColorDefinition {
  DANGER = "danger",
  INFO = "info",
  PRIMARY = "primary",
  WARNING = "warning",
  DEFAULT = "default",
}

@Options({
  components: {},
  props: {
    title: String,
    bodyNoPadding: {
      required: false,
      type: Boolean,
      default: false,
    },
    color: ColorDefinition,
  },
})
export default class CardComponent extends Vue {
  cardColor() {
    let inputType = ColorDefinition.DEFAULT;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    switch (this.color) {
    case ColorDefinition.INFO:
      inputType = ColorDefinition.INFO;
      break;
    case ColorDefinition.PRIMARY:
      inputType = ColorDefinition.PRIMARY;
      break;
    case ColorDefinition.WARNING:
      inputType = ColorDefinition.WARNING;
      break;
    case ColorDefinition.DANGER:
      inputType = ColorDefinition.DANGER;
      break;
    default:
      inputType = ColorDefinition.DEFAULT;
      break;
    }
    return `bg-${inputType}`;
  }
}
</script>

<style scoped lang="scss">
*, ::after, ::before {
  box-sizing: border-box;
}
h4 {
  font-size: 18px;
  line-height: 33.88px;
}
h1, h2, h3, h4, h5, h6 {
  margin: 10px 0;
  font-family: "Inter UI", -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
  "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-weight: 500;
  color: inherit;
}
.card {
  position: relative;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  transition: all 0.2s ease;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  &.card-default {
    border: 0px solid transparent;
    box-shadow: 0 1px 2px 0 transparent, 0 0 1px 0 rgb(0 0 0 / 0%);
    border-radius: 4px;
  }

  & > .card-header {
    color: inherit;
  }
  .card-header {
    background: transparent;
    border-radius: 0px;
    border-bottom: 0px;
    padding: 16px 16px 7px 20px;
    position: relative;
    min-height: 42px;
    margin-bottom: 0;
    z-index: auto;
    & + .card-body {
      padding-top: 0;
    }
    .card-body {
      flex: 1 1 auto;
      min-height: 1px;
      padding: 20px;
    }
  }
}
</style>
