import { Gallery } from '../../model/gallery';

export interface GalleryState {
    movies: Gallery[] | [];
}

export const initialGalleryState = {
    movies: []
};
