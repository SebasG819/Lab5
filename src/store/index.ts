import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';

export let appState: AppState = { 
	cap: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1MbPEgqCzJOow5T85FvuFOywIbbjJ-btxc3PLFAT10NX49vdRHP0FTi2zegj9hnXcRA&usqp=CAU',
	tshirt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYr8plOmqqrXhJb_BB1V_N3w8kwxzYTuYXt2jzVVISAdeJUHEnO6ahGbXITkv0T9L304&usqp=CAU',
	legs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmgyfmGfbtGHdm47uJRPB9TiYUo_PMnkRbKzQdqtWuY0nO1vo7iiJxiW60eKVzG5pykE&usqp=CAU',
};

console.log(appState);
let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
