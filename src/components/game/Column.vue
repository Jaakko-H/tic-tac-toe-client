<template>
  <div class="column">
    <square
      v-for="(mark, index) in marks"
      :key="index"
      :yIndex="index"
      :mark="mark"
      @squareClick="onClickSquare"
    ></square>
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
    xIndex: {
      type: Number,
      required: true,
    },
  },
  components: {
    Square,
  },
})
export default class Column extends Vue {
  marks!: Array<String>;
  xIndex!: Number;

  onClickSquare(yIndex: Number): void {
    this.$emit("squareClick", { x: this.xIndex, y: yIndex, mark: "X" });
  }
}
</script>

<style>
.column {
  height: 300px;
  text-align: center;
  width: 100px;
}
</style>