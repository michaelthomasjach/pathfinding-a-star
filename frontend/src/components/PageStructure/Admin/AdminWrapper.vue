<template>
  <div class="app-wrapper-admin">
    <SideMenuComponent/>
    <HeaderMenuComponent/>
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
