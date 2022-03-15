import axios from "axios";
import { CharactersFilter } from "../interfaces/characters-filter";

export async function getCharacters (count: number, page: number, filters: CharactersFilter) {
	const _filters: Partial<CharactersFilter> = {};
	if (filters.species) {
		_filters.species = filters.species;
	}
	if (filters.status !== "all") {
		_filters.status = filters.status;
	}
	if (filters.gender !== "all") {
		_filters.gender = filters.gender;
	}

	return await axios.get(`https://rickandmortyapi.com/api/character/`, { params: { ..._filters, page: page } })
		.then(r => r.data).catch(_ => []);
}

export async function getCharacter (id: number) {
	return await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
		.then(r => r.data).catch(_ => null);
}