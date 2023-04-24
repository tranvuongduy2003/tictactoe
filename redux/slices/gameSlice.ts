import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type ClickPayloadType = {
  index: number;
  winner: string | null;
};

// Define a type for the slice state
interface GameState {
  board: string[];
  xIsNext: boolean;
  turn: 0 | 1; // 0 is human, 1 is computer
}

// Define the initial state using that type
const initialState: GameState = {
  board: Array(9).fill(null),
  xIsNext: true,
  turn: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    click: (state, action: PayloadAction<ClickPayloadType>) => {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      state.board = nextState.board;
      state.xIsNext = nextState.xIsNext;
      state.turn = 0;
    },
    computerPlay: (state, action: PayloadAction<ClickPayloadType>) => {
      const { board, xIsNext } = state;
      const { winner } = action.payload;
      if (winner) return;
      const emptyIndexes = board.map((cell, index) => {
        if (cell === null) {
          return index;
        }
      });
      const index =
        emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)] || 0;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      state.board = nextState.board;
      state.xIsNext = nextState.xIsNext;
      state.turn = 1;
    },
    reset: (state) => {
      state.board = initialState.board;
      state.xIsNext = initialState.xIsNext;
    },
  },
});

export const { click, computerPlay, reset } = gameSlice.actions;

export const game = (state: RootState) => state.game;

export default gameSlice.reducer;
