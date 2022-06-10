<template>
    <AstarComponent/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AstarComponent from "@/components/public/Astar/AstarComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    AstarComponent,
  },
  props: {
    msg: String,
  },
})
export default class AstarPage extends Vue { }
</script>
