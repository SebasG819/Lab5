import { TopImagesActions } from '../types/store';
import { MediumImageAction } from '../types/store';
import { BottomImageAction } from '../types/store';

export const changeTopimage = (payload: any) => {
	return {
		action: TopImagesActions.TOPIMAGES,
		payload,
	};
	return {
		action: TopImagesActions.MEDIUMIMAGES,
		payload,
	};
	return {
		action: TopImagesActions.BOTTOMIMAGES,
		payload,
	};
};
