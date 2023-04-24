import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type ClickPayloadType = {
  index: number;
  winner: string | null;
};

// Define a type for the slice state
interface CounterState {
  board: string[];
  xIsNext: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  board: Array(9).fill(null),
  xIsNext: true,
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
    },
    reset: (state) => {
      state.board = initialState.board;
      state.xIsNext = initialState.xIsNext;
    },
  },
});

export const { click, reset } = gameSlice.actions;

export const game = (state: RootState) => state.game;

export default gameSlice.reducer;
