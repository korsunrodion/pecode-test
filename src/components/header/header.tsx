import React from "react";
import cx from './header.module.scss';
import { Link } from "@reach/router";

interface Props {
	items: Array<{ title: string, link: string }>;
}

const Header: React.FC<Props> = ({ items }) => {
	return (
		<div className={cx.header}>
			{items.map((item, i) => {
				return (
					<Link to={item.link} key={i} className={cx.item}>
						{item.title}
					</Link>
				)
			})}
		</div>
	)
}

export default Header;