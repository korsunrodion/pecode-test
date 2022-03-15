import React from "react";
import Checkbox from '@mui/material/Checkbox';
import cx from './watch-list-item.module.scss';
import { Icons } from '../../ui/icon/icons';
import Icon from "../../ui/icon/icon";

interface Props {
	id: number;
	title: string;
	watched: boolean;
	onRemove: () => void;
	onCheck: () => void;
}


const WatchListItem: React.FC<Props> = ({ id, title, watched, onRemove, onCheck }) => {
	return (
		<div className={cx.container}>
			<Checkbox checked={watched} onChange={() => onCheck()}/>
			<div>{title}</div>
			<div className={cx.controls}>
				<Icon type={Icons.DELETE} width={18} height={18} onClick={() => onRemove()} />
			</div>
		</div>
	)
}

export default WatchListItem;