<template>
  <section class="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit tempore at, cum odio
    laudantium aperiam labore vel quas quo illum culpa veniam, alias aliquid, dolor error facere
    nulla magnam modi minima sed ipsum eos laborum. Animi nihil aut sunt doloribus necessitatibus
    consequuntur accusamus dolorum iusto modi voluptatum voluptatibus, consectetur ipsam quis alias
    labore iste veniam sed. Nihil laudantium ipsa iure tempora rerum quaerat voluptatem blanditiis
    quo exercitationem sequi alias reprehenderit qui, accusantium numquam obcaecati at minus. Est
    non odit consequuntur sit, iure voluptatum, tempora exercitationem temporibus adipisci expedita
    asperiores. Commodi nihil laboriosam voluptas autem aliquid pariatur placeat molestiae ad.
  </section>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class ResumeComponent extends Vue {
  get msg(): string {
    return this.msg;
  }
}
</script>

<style lang="scss">
.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/hero_mount.jpg");
}
</style>
