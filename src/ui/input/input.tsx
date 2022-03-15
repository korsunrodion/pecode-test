import React from "react";
import classNames from "classnames";
import cx from './input.module.scss';

interface Props {
	label: string;
	value: string;
	onChange: (value: string) => void;
	className?: any;
}

const Input: React.FC<Props> = ({ label, value, onChange, className }) => {
	return (
		<div className={classNames(cx.container, className)}>
			<label className={cx.label}>{label}</label>
			<input className={cx.input} value={value} onChange={(e) => onChange(e.target.value)} />
		</div>
	)
}

export default Input;