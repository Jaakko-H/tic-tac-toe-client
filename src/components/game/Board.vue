<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div class="board" v-if="state.board">
      <column
        v-for="(markColumn, index) in state.board"
        :key="index"
        :marks="markColumn"
        :xIndex="index"
        @squareClick="handleSquareClick"
      ></column>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Column from "./Column.vue";
import axios from "axios";
import IClickEvent from "./clickEvent";
import store from "../../store/store";

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
  state = store.state;

  created(): void {
    store.setBoardAction(new Array(this.size).fill(new Array(this.size)));
  }

  async handleSquareClick(event: IClickEvent): Promise<void> {
    const url = `${process.env.VUE_APP_GAME_SERVER_BASE_URL}game/place-mark?x=${event.x}&y=${event.y}&mark=${event.mark}`;
    // TODO: Set base url with axiosConfig
    const result = await axios.patch(url);
    store.setBoardAction(result.data.board);
  }
}
</script>

<style scoped>
.board {
  display: flex;
  justify-content: center;
}
</style>