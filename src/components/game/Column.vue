<template>
  <div class="column">
    <square v-for="(mark, index) in marks" :key="index"></square>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Square from "./Square.vue";

@Options({
  props: {
    marks: {
      type: Array,
      required: true,
    },
  },
  components: {
    Square,
  },
})
export default class Column extends Vue {
  marks!: Array<String>;
}
</script>

<style>
.column {
  height: 300px;
  text-align: center;
  width: 100px;
}
</style>