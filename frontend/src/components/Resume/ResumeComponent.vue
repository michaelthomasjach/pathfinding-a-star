<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>Component du CV</div>
    <div>{{ msg }}</div>
  </div>

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HomePage extends Vue {
  get msg(): string {
    return this.msg;
  }
}
</script>
