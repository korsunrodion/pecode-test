import {useCallback, useEffect, useRef, useState} from "react";
import { WatchListItem } from "../../interfaces/watch-list-item";

const useWatchList = () => {
	const [items, setItems] = useState<WatchListItem[]>([]);
	const itemsRef = useRef(items);

	const localStorageKey = "watchList";

	const update = useCallback(() => {
		const ls = localStorage.getItem(localStorageKey);
		if (ls) {
			setItems(JSON.parse(ls));
		} else {
			setItems([]);
		}
	}, []);

	const remove = useCallback(id => {
		const newItems = itemsRef.current.filter(i => i.id !== id);
		localStorage.setItem(localStorageKey, JSON.stringify(newItems));
		update();
	}, [update]);

	const check = useCallback(id => {
		const index = itemsRef.current.findIndex(i => i.id === id);
		const newItems = [
			...itemsRef.current.slice(0, index),
			itemsRef.current[index],
			...itemsRef.current.slice(index + 1)
		]
		newItems[index].watched = !newItems[index].watched;
		localStorage.setItem(localStorageKey, JSON.stringify(newItems));
		update();
	}, [update]);

	const add = useCallback((title: string) => {
		const newItem: WatchListItem = { id: itemsRef.current.length, title: title, watched: false };
		localStorage.setItem(localStorageKey, JSON.stringify([...itemsRef.current, newItem ]));
		update();
	}, [update]);

	useEffect(() => {
		update();
	}, [update]);

	useEffect(() => {
		itemsRef.current = items;
	}, [items]);

	return { items, remove, check, add };
}

export default useWatchList;