import { GalleryActions, GalleryActionTypes } from './gallery.actions';
import { initialGalleryState, GalleryState } from './gallery.state';

export function galleryReducer (
    state = initialGalleryState,
    action: GalleryActions
    ): GalleryState {
        switch (action.type) {
            case GalleryActionTypes.GALLERY_LOADED: {
                return {
                    ...state,
                    movies: action.payload
                };
            }
            default:
                return state;
        }
}
