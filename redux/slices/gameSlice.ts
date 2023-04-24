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
  turn: 0 | 1; // 0 is human, 1 is computer
}

// Define the initial state using that type
const initialState: GameState = {
  board: Array(9).fill(null),
  turn: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    click: (state, action: PayloadAction<ClickPayloadType>) => {
      const { board } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = "X";
      state.board = nextState.board;
      state.turn = 1;
    },
    computerPlay: (state, action: PayloadAction<ClickPayloadType>) => {
      const { board } = state;
      const { winner } = action.payload;
      if (winner) return;
      const emptyIndexes: number[] = [];
      board.forEach((cell, index) => {
        if (cell === null) {
          emptyIndexes.push(index);
        }
      });
      console.log(emptyIndexes);
      const index =
        emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)] || 0;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = "O";
      state.board = nextState.board;
      state.turn = 0;
    },
    reset: (state) => {
      state.board = initialState.board;
      state.turn = 0;
    },
  },
});

export const { click, computerPlay, reset } = gameSlice.actions;

export const game = (state: RootState) => state.game;

export default gameSlice.reducer;
