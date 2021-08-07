<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div class="board" v-if="marks">
      <column
        v-for="(markColumn, index) in marks"
        :key="index"
        :marks="markColumn"
      ></column>
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
  marks!: Array<Array<String>>;
  // Careful here, size needs to be 'number', not 'Number' to find the correct Array constructor
  size!: number;

  created(): void {
    this.marks = new Array(this.size).fill(new Array(this.size));
  }
}
</script>

<style scoped>
.board {
  display: flex;
  justify-content: center;
}
</style>