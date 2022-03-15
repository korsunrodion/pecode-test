import React from "react";
import classNames from "classnames";
import cx from './button.module.scss';

interface Props {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }) => {
	return (
		<div className={classNames(cx.container, className)} onClick={() => onClick()}>
			<button className={cx.button} onClick={() => onClick()}>{children}</button>
		</div>
	)
}

export default Button;