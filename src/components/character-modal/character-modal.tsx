import React, {useEffect, useState} from "react";
import { Character } from "../../interfaces/character";
import { getCharacter } from "../../api/characters-api";
import cx from './character-modal.module.scss';
import Loader from "../loader/loader";
import Button from "../../ui/button/button";

interface Props {
	id: number;
	onClose: () => void
}

const CharacterModal: React.FC<Props> = ({ id, onClose }) => {
	const [character, setCharacter] = useState<Character>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetch = async () => {
			setLoading(true);
			const response = await getCharacter(id);
			setCharacter(response);
			setLoading(false);
		}

		fetch();
	}, [id]);

	return (
		<div className={cx.container}>
			{loading && <Loader loading={loading} />}
			{!loading && character &&
				<div className={cx.modal}>
					<img src={character.image} alt={'logo'} />
					<span className={cx.label}>Name</span>
					<span className={cx.info}>{character.name}</span>
					<span className={cx.label}>Status</span>
					<span className={cx.info}>{character.status}</span>
					<span className={cx.label}>Species</span>
					<span className={cx.info}>{character.species}</span>
					<span className={cx.label}>Gender</span>
					<span className={cx.info}>{character.gender}</span>
					<span className={cx.label}>Origin</span>
					<span className={cx.info}>{character.origin.name}</span>
					<span className={cx.label}>Location</span>
					<span className={cx.info}>{character.location.name}</span>
					<Button className={cx.closeBtn} onClick={() => onClose()}>Close</Button>
				</div>
			}
		</div>
	)
}

export default CharacterModal;