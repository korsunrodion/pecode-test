import React from "react";
import cx from './icon.module.scss';

interface Props {
	type: any;
	width: number;
	height: number;
	onClick?: () => void;
}

const Icon: React.FC<Props> = ({ type, width, height, onClick }) => {
	return (
		<i onClick={onClick} className={cx.container} style={{ display: "inherit", width, height }}>
			{type}
		</i>
	)
}

export default Icon;