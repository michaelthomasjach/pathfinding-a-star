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
import HeaderComponent from "@/components/PageStructure/Header/HeaderComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    HeaderComponent,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

</style>
