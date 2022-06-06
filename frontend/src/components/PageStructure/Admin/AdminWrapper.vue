<template>
  <div class="app-wrapper">
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
import HeaderComponent from "@/components/PageStructure/Admin/HeaderComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    HeaderComponent,
  },
})
export default class AdminWrapper extends Vue {

}
</script>

<style lang="scss">

</style>
