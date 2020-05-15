import { initialErrorState, ErrorState } from './error.state';
import { ErrorActions, ErrorActionTypes } from './error.actions';

export function errorReducer (
    state = initialErrorState,
    action: ErrorActions
): ErrorState {
    switch (action.type) {
        case ErrorActionTypes.ADD_ERROR:
            return {
                error: action.payload
            };
        default:
            return state;
    }
}
