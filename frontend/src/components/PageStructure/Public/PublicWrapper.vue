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
