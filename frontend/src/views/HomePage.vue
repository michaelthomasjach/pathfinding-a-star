<template>
  <div class="home">
    <ResumeComponent msg="Mon cv via props" />
    <ResumeComponent msg="Mon cv via props" />
    <ResumeComponent msg="Mon cv via props" />
    <ResumeComponent msg="Mon cv via props" />
    <ResumeComponent msg="Mon cv via props" />
    <ResumeComponent msg="Mon cv via props" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ResumeComponent from "@/components/Resume/ResumeComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    ResumeComponent,
  },
})
export default class HomePage extends Vue { }
</script>
