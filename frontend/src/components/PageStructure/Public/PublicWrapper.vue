<template>
  <div class="app-wrapper-public">
    <HeaderComponent/>
    <div class="page-wrapper">
      <div class="page">
        <div class="page-content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "@/components/PageStructure/Public/HeaderComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    HeaderComponent,
  },
})
export default class PublicWrapper extends Vue {

}
</script>
<style scoped lang="scss">
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'font-awesome/css/font-awesome.min.css';
@import '@/assets/global/swiper/css/swiper.min.css';
@import '@/assets/global/pages/css/pages.min.css';
@import '@/assets/global/pages/css/pages-icons.min.css';
</style>
