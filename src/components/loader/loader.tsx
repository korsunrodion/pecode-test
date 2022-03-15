import React from "react";
import { RingLoader } from "react-spinners";
import cx from './loader.module.scss';
import classNames from 'classnames';

interface Props {
	loading: boolean;
}

const Loader: React.FC<Props> = ({ loading }) => {
	const color = "#f0e14a";

	return (
		<div className={classNames(cx.loader, {[cx.active]: loading})}>
			<div className={cx.overlay} />
			<RingLoader size={100} loading={loading} color={color} />
		</div>
	)
}

export default Loader;