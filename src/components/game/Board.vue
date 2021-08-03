<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    size: {
      type: Number,
      default: 3,
    },
  },
})
export default class Board extends Vue {
  size!: Number;
}
</script>

<style scoped>
</style>