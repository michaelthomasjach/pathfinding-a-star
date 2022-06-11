<template>
  <div class="home-page">
    <JumbotronComponent/>
    <ResumeComponent msg="Mon cv via props" />

    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <!-- eslint-disable -->
    <section>
      <h3>binding value</h3>
      <input type="radio" v-model="gender" v-bind:value="a">man
      <input type="radio" v-model="gender" v-bind:value="b">woman
      <br />
      <span>value: {{gender}}</span>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import JumbotronComponent from "@/components/public/Home/JumbotronComponent.vue"; // @ is an alias to /src
import ResumeComponent from "@/components/public/Home/ResumeComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    JumbotronComponent,
    ResumeComponent,
  },
})
export default class HomePage extends Vue {
  message = "";
  gender = ""
  a = 0;
  b = 1;
}
</script>
