import { GalleryActions, GalleryActionTypes } from './gallery.actions';
import { initialGalleryState, GalleryState } from './gallery.state';

export function galleryReducer (
    state = initialGalleryState,
    action: GalleryActions
    ): GalleryState {
        const movieDetail = state.movie_details || {};
        switch (action.type) {
            case GalleryActionTypes.GALLERY_LOADED: {
                return {
                    ...state,
                    movies: action.payload
                };
            }
            case GalleryActionTypes.MOVIE_LOADED: {
                return {
                    ...state,
                    movie_details: {
                        ...movieDetail,
                        [action.payload.id]: action.payload.movieDetail
                    }
                };
            }
            default:
                return state;
        }
}
