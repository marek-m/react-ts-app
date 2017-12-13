import {IAction} from '../actions';
import {DECREMENT_ENTHUSIASM, GET_REPOS, GET_REPOS_SUCCESS, INCREMENT_ENTHUSIASM_SUCCESS} from '../../constants';
import { AppStateModel } from '../model/app-state.model';

const initialState: AppStateModel = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
    repos: []
};

export function enthusiasm(state: AppStateModel = initialState, action: IAction<any>): AppStateModel {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM_SUCCESS:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        case GET_REPOS: {
            return {
                ...state,
                repos: []
            };
        }
        case GET_REPOS_SUCCESS: {
            return {
                ...state,
                repos: action.payload.list
            };
        }
        default: {
            return state;
        }
    }
}