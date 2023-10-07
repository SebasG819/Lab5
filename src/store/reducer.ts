import { AppState } from '../types/store';

import { Actions, TopImagesActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case TopImagesActions.TOPIMAGES:
			return {
				...currentState,
				cap: payload,
			};

			case TopImagesActions.MEDIUMIMAGES:
			return {
				...currentState,
				tshirt: payload,
			};

			case TopImagesActions.BOTTOMIMAGES:
			return {
				...currentState,
				legs: payload,
			};

		default:
			return currentState;
	} 
};
