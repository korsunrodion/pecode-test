import { configureStore } from "@reduxjs/toolkit";
// @ts-ignore
import { episodesSlice } from "./slice/episodes-slice";

export const store = configureStore({
	reducer: {
		episodes: episodesSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch