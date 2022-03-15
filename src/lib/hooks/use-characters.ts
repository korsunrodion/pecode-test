import { CharactersFilter } from "../../interfaces/characters-filter";
import { getCharacters } from "../../api/characters-api";
import { useEffect, useState } from "react";
import { Character } from "../../interfaces/character";

export const useCharacters = (page: number, perPage: number, filters: CharactersFilter) => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [pages, setPages] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetch = async () => {
			const response = await getCharacters(perPage, page, filters);
			setCharacters(response.results ? response.results : response);
			setPages(response.info ? response.info.pages : 1);
			setLoading(false);
		}

		fetch();
	}, [page, perPage, filters]);

	return { characters, pages, loading };
}
