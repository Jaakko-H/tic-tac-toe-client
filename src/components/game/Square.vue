<template>
  <div class="square" @click="onClickSquare">{{ mark }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    mark: {
      type: String,
      default: "",
    },
    yIndex: {
      type: Number,
      required: true,
    },
  },
})
export default class Square extends Vue {
  mark?: String;
  yIndex!: Number;

  onClickSquare(): void {
    this.$emit("squareClick", this.yIndex);
  }
}
</script>

<style scoped>
.square {
  align-items: center;
  display: flex;
  font-size: 32px;
  margin-left: 1px;
  margin-right: 1px;
  height: 100px;
  justify-content: center;
  /* Use outline instead of borders to keep square height and width consistent */
  outline-width: 1px;
  outline-style: solid;
  width: 100px;
}
</style>