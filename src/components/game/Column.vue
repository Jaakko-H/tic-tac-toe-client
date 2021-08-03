<template>
  <div class="column">
    <square v-for="n in size" :key="n"></square>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Square from "./Square.vue";

@Options({
  props: {
    size: {
      type: Number,
      default: 3,
    },
  },
  components: {
    Square,
  },
})
export default class Column extends Vue {
  size?: Number;
}
</script>

<style>
.column {
  height: 300px;
  text-align: center;
  width: 100px;
}
</style>