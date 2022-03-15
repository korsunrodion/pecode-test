import React, { useMemo, useState } from 'react';
import Grid from "../../containers/grid/grid";
import CharacterCard from "../../components/character-card/character-card";
import { useCharacters } from "../../lib/hooks/use-characters";
import Loader from "../../components/loader/loader";
import cx from './characters.module.scss';
import CharacterFilter from "../../components/character-filter/character-filter";
import { CharactersFilter as Filter } from "../../interfaces/characters-filter";
import CharacterModal from "../../components/character-modal/character-modal";

const Characters: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [filters, setFilters] = useState<Filter>({ status: 'all', gender: 'all', species: '' });
	const [modalId, setModalId] = useState<number|null>(null);

	const count = useMemo(() => 20, []);

	const { characters, pages, loading } = useCharacters(page, count, filters);

	const gridItems = useMemo(() => characters.map(c => {
		return <CharacterCard id={c.id} name={c.name} species={c.species} logo={c.image} status={c.status} gender={c.gender} onClick={() => onItemClick(c.id)} />
	}), [characters]);

	const onPaginate = (value: number) => {
		setPage(value);
	}

	const onFilterChange = (value: Filter) => {
		setFilters(value);
	}

	const onItemClick = (id: number) => {
		setModalId(id);
	}

	return (
		<div className={cx.container}>
			<Loader loading={loading} />
			<CharacterFilter value={filters} onChange={onFilterChange} />
			<Grid items={gridItems} pages={pages} onPaginate={onPaginate} />
			{modalId && <CharacterModal id={modalId} onClose={() => setModalId(null)} />}
		</div>
	)
}

export default Characters;