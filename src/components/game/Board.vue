<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div class="board">
      <column v-for="n in size" :key="n"></column>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Column from "./Column.vue";

@Options({
  props: {
    size: {
      type: Number,
      default: 3,
    },
  },
  components: {
    Column,
  },
})
export default class Board extends Vue {
  size!: Number;
}
</script>

<style scoped>
.board {
  display: flex;
  justify-content: center;
}
</style>