<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div class="board" v-if="state.gameState.board">
      <column
        v-for="(markColumn, index) in state.gameState.board"
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
import IClickEvent from "../../model/clickEvent";
import store from "../../store/store";
import IGameState from "@/model/gameState";

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

  async created(): Promise<void> {
    const url = `${process.env.VUE_APP_GAME_SERVER_BASE_URL}game/new`;
    const { data } = await axios.post<IGameState>(url);
    store.setGameStateAction(data);
  }

  async handleSquareClick(event: IClickEvent): Promise<void> {
    const url = `${process.env.VUE_APP_GAME_SERVER_BASE_URL}game/place-mark?x=${event.x}&y=${event.y}&mark=${event.mark}`;
    // TODO: Set base url with axiosConfig
    const { data } = await axios.patch<IGameState>(url);
    store.setGameStateAction(data);
  }
}
</script>

<style scoped>
.board {
  display: flex;
  justify-content: center;
}
</style>