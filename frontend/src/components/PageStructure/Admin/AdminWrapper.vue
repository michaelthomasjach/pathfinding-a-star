<template>
  <div class="app-wrapper-admin">
    <SideMenuComponent/>
    <HeaderMenuComponent/>
    <div class="page-wrapper">
      <div class="page">
        <div class="page-content">
          <i class="pg-close"></i>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "@/components/PageStructure/Admin/HeaderComponent.vue"; // @ is an alias to /src
import SideMenuComponent from "@/components/PageStructure/Admin/SideMenuComponent.vue"; // @ is an alias to /src
import HeaderMenuComponent from "@/components/PageStructure/Admin/HeaderMenuComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    HeaderComponent,
    SideMenuComponent,
    HeaderMenuComponent,
  },
})
export default class AdminWrapper extends Vue {

}
</script>

<style scoped lang="scss">
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'font-awesome/css/font-awesome.min.css';
@import '@/assets/global/pages/css/pages.min.css';
@import '@/assets/global/pages/css/pages-icons.min.css';

.page-wrapper {
  position: relative;
  padding-left: 70px;
  margin-top: 75px;
  .page {
    position: relative;
    padding: 25px;
  }
}
</style>
