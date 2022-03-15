import React, { useRef, useState } from "react";
import { CharactersFilter as Filter } from "../../interfaces/characters-filter";
import { SelectOption } from "../../interfaces/select-option";
import cx from './character-filter.module.scss';
import Select from "../../ui/select/select";
import Input from "../../ui/input/input";

interface Props {
	value: Filter;
	onChange: (value: Filter) => void;
}

const statusOptions: readonly SelectOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'alive', label: 'Alive' },
	{ value: 'dead', label: 'Dead' },
	{ value: 'unknown', label: 'Unknown' }
];

const genderOptions: readonly SelectOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'female', label: 'Female' },
	{ value: 'male', label: 'Male' },
	{ value: 'genderless', label: 'Genderless' },
	{ value: 'unknown', label: 'Unknown' }
]

const CharacterFilter: React.FC<Props> = ({ value, onChange }) => {
	const [species, setSpecies] = useState<string>(value.species);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>|null>();

	const onStatusChange = (option: SelectOption) => {
		const newFilter = {...value, status: option.value };
		onChange(newFilter);
	}

	const onGenderChange = (option: SelectOption) => {
		const newFilter = {...value, gender: option.value };
		onChange(newFilter);
	}

	const onSpeciesChange = (newSpecies: string) => {
		setSpecies(newSpecies);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			const newFilter = {...value, species: newSpecies};
			onChange(newFilter);
		}, 300);
	}

	return (
		<div className={cx.container}>
			<Select className={cx.select} options={statusOptions} onChange={onStatusChange} label={"Status"} />
			<Select className={cx.select} options={genderOptions} onChange={onGenderChange} label={"Gender"} />
			<Input className={cx.input} label={"Species"} value={species} onChange={onSpeciesChange} />
		</div>
	)
}

export default CharacterFilter;