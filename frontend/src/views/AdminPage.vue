<template>
  <div class="home-page">
    <AdminComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AdminComponent from "@/components/Admin/AdminComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    AdminComponent,
  },
})
export default class AdminPage extends Vue { }
</script>
