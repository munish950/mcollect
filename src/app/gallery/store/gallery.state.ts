import { Gallery, MovieDetail } from '../../model/gallery';

/*
export interface GalleryState {
    movies: Gallery[] | [];
}
*/

export interface GalleryState {
    movies: Gallery[] | [];
    movie_details: { [id: number]: MovieDetail } | {};
}

export const initialGalleryState = {
    movies: [],
    movie_details: {}
};
