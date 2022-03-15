import React, { useState } from "react";
import useWatchList from "../../lib/hooks/use-watch-list";
import WatchListItem from "./watch-list-item";
import cx from './watch-list.module.scss';
import Input from "../../ui/input/input";
import Button from "../../ui/button/button";

const WatchList: React.FC = () => {
	const [name, setName] = useState("");

	const { items, remove, check, add } = useWatchList();

	const onAdd = () => {
		add(name);
	}

	return (
		<div className={cx.container}>
			<div className={cx.itemsWrapper}>
				{items.map(i => (
					<WatchListItem key={i.id} id={i.id} title={i.title} watched={i.watched} onRemove={() => remove(i.id)} onCheck={() => check(i.id)} />
				))}
			</div>
			<div className={cx.input}>
				<Input label={"Name"} value={name} onChange={(v: string) => setName(v)} />
				<Button onClick={onAdd}>Add</Button>
			</div>
		</div>
	)
}

export default WatchList;