import { reactive } from "vue";

export default {
  debug: false,
  state: reactive({
    board: new Array(),
  }),

  setBoardAction(newBoard: Array<Array<String>>): void {
    if (this.debug) {
      console.log("setBoardAction triggered with value:", newBoard);
    }
    this.state.board = newBoard;
  }
};