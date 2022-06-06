<template>
  <div class="app-wrapper">
    <router-view/>
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
@import './src/styles/core.scss';

$base-img-url: "./assets/@pages/pages/images" ;
$assets-url: "./assets" ;

@import "./src/styles/modules/_layout.scss";
//UI Components
@import "./src/styles/icons.scss";
@import "./src/styles/modules/_typography.scss";
@import "./src/styles/modules/_buttons.scss";
@import "./src/styles/modules/_alerts.scss";
@import "./src/styles/modules/_notifications.scss";
//Cards
@import "./src/styles/modules/cards.scss";
//Form Elements
@import "./src/styles/modules/form_elements.scss";
//Login
@import "./src/styles/modules/login.scss";
//Lock screen
@import "./src/styles/modules/lock_screen.scss";
//Error
@import "./src/styles/modules/_error.scss";
//Z-indexes
@import "./src/styles/modules/z_index.scss";
//Misc Helpers
@import "./src/styles/modules/_misc.scss";
//Responsive Classes
@import "./src/styles/_responsive.scss";
//Utils
@import "./src/styles/utils.scss";
</style>
