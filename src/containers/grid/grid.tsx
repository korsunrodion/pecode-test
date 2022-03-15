import React, { ChangeEvent, ReactElement } from 'react';
import cx from './grid.module.scss';
import Pagination from '@mui/material/Pagination';

interface Props {
	items: ReactElement[];
	onPaginate: (value: number) => void;
	pages: number;
}

const Grid: React.FC<Props> = ({ items, onPaginate, pages }) => {
	const _onPaginate = (event: ChangeEvent<unknown>, value: number) => {
		onPaginate(value);
	}

	return (
		<div className={cx.grid}>
			<div className={cx.items}>
				{items.map((i, k) => {
					return (
						<div key={k} className={cx.item}>
							{i}
						</div>
					)
				})}
			</div>
			<div className={cx.paginationWrapper}>
				<Pagination count={pages} shape="rounded" showFirstButton showLastButton onChange={_onPaginate} />
			</div>
		</div>
	)
}

export default Grid;