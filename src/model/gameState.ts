export default interface IGameState {
  board: Array<Array<String>>;
  currentTurn: String;
  id: String;
  isFinished: Boolean;
  winner: String;
}