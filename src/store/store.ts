import IGameState from "@/model/gameState";
import { reactive } from "vue";

export default {
  debug: false,
  state: reactive({
    gameState: {},
  }),

  setGameStateAction(newGameState: IGameState): void {
    if (this.debug) {
      console.log("setGameStateAction triggered with value:", newGameState);
    }
    this.state.gameState = newGameState;
  }
};