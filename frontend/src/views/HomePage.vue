<template>
  <div class="home-page">
    <JumbotronComponent/>
    <ResumeComponent msg="Mon cv via props" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import JumbotronComponent from "@/components/Home/JumbotronComponent.vue"; // @ is an alias to /src
import ResumeComponent from "@/components/Home/ResumeComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    JumbotronComponent,
    ResumeComponent,
  },
})
export default class HomePage extends Vue { }
</script>
