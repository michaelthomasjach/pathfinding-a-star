<template>
  <section class="jumbotron full-vh" data-pages="parallax">
    <div class="inner full-height">
      <!-- BEGIN SLIDER -->
      <div class="swiper-container" id="hero">
        <div class="swiper-wrapper">
          <!-- BEGIN SLIDE -->
          <div class="swiper-slide fit bg-complete">
            <!-- BEGIN IMAGE PARRALAX -->
            <div class="slider-wrapper">
              <div class="image" data-swiper-parallax="30%">
                <div class="bg-image full-height"
                  data-bg-overlay-class="bg-white"
                ></div>
              </div>
            </div>
            <!-- END IMAGE PARRALAX -->
            <!-- BEGIN CONTENT -->
            <div class="content-layer">
              <div class="inner full-height">
                <div class="container-xs-height full-height">
                  <div class="col-xs-height col-middle text-left">
                    <div class="container text-center">
                      <h6 class="block-title m-b-0 text-white hint-text">Développeur</h6>
                      <h1 class="m-t-5 light text-white">Michael Jach.</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class JumbotronComponent extends Vue {
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
