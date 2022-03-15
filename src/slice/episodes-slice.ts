import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShortEpisode } from "../interfaces/short-episode";

export interface EpisodesSlice {
	episodes: ShortEpisode[]
}

const initialState: EpisodesSlice = {
	episodes: []
}

export const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {
		setEpisodes: (state, action: PayloadAction<ShortEpisode[]>) => {
			state.episodes = action.payload;
		}
	}
})

export const { setEpisodes } = episodesSlice.actions;

export default episodesSlice.reducer;