<template>
  <div>
    <section class="container relative">
      <div class="top-left z-index-10">
        <div class="bg-white p-l-20 p-r-20 p-t-20 p-b-20">
          <img
            src="@/assets/public/images/logo_b.png"
            data-src-retina="assets/images/logo_b_2x.png"
            class=""
            alt=""
            width="17"
            height="20"
          />
        </div>
      </div>
    </section>
    <nav
      class="header bottom bg-header light-solid">
      <img
        src="@/assets/public/images/brush_stroke.png"
        class="demo-brush bottom-left"
        alt=""
      />
      <div class="container relative">
        <div class="pull-left">
          <div class="header-inner">
            <img
              src="@/assets/public/images/logo_b.png"
              data-src-retina="assets/images/logo_b_2x.png"
              class=""
              alt=""
              width="17"
              height="20"
            />
          </div>
        </div>
        <div class="pull-right">
          <div class="header-inner">
            <Anchor
              href="#"
              data-toggle="search"
              class="search-toggle visible-sm-inline visible-xs-inline p-r-10"
              ><i class="fs-14 pg-search"></i
            ></Anchor>
            <div
              class="visible-sm-inline visible-xs-inline menu-toggler pull-right p-l-10"
              data-pages="header-toggle"
              data-pages-element="#header"
            >
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
            </div>
          </div>
        </div>
        <div
          class="menu-content pull-right clearfix"
          data-pages="menu-content"
          data-pages-direction="slideRight"
          id="header"
        >
          <div class="pull-right">
            <!-- eslint-disable max-len -->
            <Anchor
              href="#"
              class="text-black link padding-10 visible-xs-inline visible-sm-inline pull-right m-t-10 m-b-10 m-r-10"
              data-pages="header-toggle"
              data-pages-element="#header"
            >
            <!-- eslint-enable max-len -->
              <i class="pg-close_line"></i>
            </Anchor>
          </div>
          <div class="header-inner">
            <ul class="menu">
              <li>
                <a class="active" href="#" data-text="Home"
                  >Home
                  <span data-text="Welcome">Welcome</span>
                </a>
              </li>
              <li class="classic multiline">
                <a href="javascript:;" data-text="Elements"
                  >Elements <i class="pg-arrow_minimize m-l-5"></i>
                  <span data-text="Shortcodes">Shortcodes</span></a
                >
                <nav class="classic">
                  <span class="arrow"></span>
                  <ul>
                    <li>
                      <a href="http://pages.revox.io/frontend/1.0/doc/#color" target="_blank"
                        >Colors</a
                      >
                    </li>
                    <li>
                      <a href="http://pages.revox.io/frontend/1.0/doc/#icons" target="_blank"
                        >Icons</a
                      >
                    </li>
                    <li>
                      <a href="http://pages.revox.io/frontend/1.0/doc/#buttons" target="_blank"
                        >Buttons</a
                      >
                    </li>
                    <li>
                      <a href="http://pages.revox.io/frontend/1.0/doc/#modals" target="_blank"
                        >Modals</a
                      >
                    </li>
                    <li>
                      <a
                        href="http://pages.revox.io/frontend/1.0/doc/#progress_bars"
                        target="_blank"
                        >Progress &amp; Activity</a
                      >
                    </li>
                    <li>
                      <a href="http://pages.revox.io/frontend/1.0/doc/#accordians" target="_blank"
                        >Accordians</a
                      >
                    </li>
                    <li>
                      <a href="http://pages.revox.io/frontend/1.0/doc/#tabs" target="_blank"
                        >Tabs</a
                      >
                    </li>
                  </ul>
                </nav>
              </li>
              <li>
                <a href="pricing.html" data-text="Pricing"
                  >Pricing <span data-text="Plans">Plans</span>
                </a>
              </li>
              <li>
                <a href="portfolio.html" data-text="Portofolio"
                  >Portofolio <span data-text="Clients">Clients</span></a
                >
              </li>
              <li>
                <a href="contact.html" data-text="Contact Us"
                  >Contact Us <span data-text="Get in touch">Get in touch </span></a
                >
              </li>
            </ul>
            <Anchor href="#" class="search-toggle hidden-xs hidden-sm" data-toggle="search"
              ><i class="fs-14 pg-search"></i
            ></Anchor>
            <!-- BEGIN COPYRIGHT FOR MOBILE -->
            <div class="font-arial m-l-35 m-r-35 m-b-20 m-t-20 visible-sm visible-xs">
              <p class="fs-11 no-margin small-text p-b-20">
                Exclusive only at ,Themeforest. See Standard licenses & Extended licenses
              </p>
              <p class="fs-11 small-text muted">Copyright &copy; 2014 REVOX</p>
            </div>
            <!-- END COPYRIGHT FOR MOBILE -->
          </div>
          <!-- END MENU ITEMS -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Getter } from "s-vuex-class";

export default class HeaderComponent extends Vue {
  @Getter("getUser") getUser: any;

  get user() {
    if (this.$store.getters.getUser === undefined) return "";
    return this.$store.getters.getUser.Firstname;
  }
}
</script>

<style scoped lang="scss">
.header {
  &.bottom {
    top: auto !important;
  }
}
</style>
