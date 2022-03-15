import axios from "axios";
import { ShortEpisode } from "../interfaces/short-episode";

export async function getAllEpisodes ()  {
	let episodes: ShortEpisode[] = [];

	for (const i of [1, 2, 3]) {
		episodes = [...episodes, ...(await axios.get("https://rickandmortyapi.com/api/episode", { params: { page: i } })
			.then(r => r.data.results))];
	}

	return episodes;
}