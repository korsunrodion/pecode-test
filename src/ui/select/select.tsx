import React from "react";
import classNames from "classnames";
import { SelectOption } from "../../interfaces/select-option";
import cx from './select.module.scss';

interface Props {
	options: readonly SelectOption[];
	onChange: (value: SelectOption) => void;
	label: string;
	className?: any;
}

const Select: React.FC<Props> = ({ options, onChange, label, className }) => {
	const _onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		const option = options.filter(o => o.value === value)[0];
		onChange(option);
	}

	return (
		<div className={classNames(cx.container, className)}>
			<span className={cx.label}>{label}</span>
			<div className={cx.selectWrapper}>
				<select onChange={_onChange}>
					{options.map((o, k) => (
						<option key={k} value={o.value}>{o.label}</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default Select;