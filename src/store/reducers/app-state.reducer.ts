import {IAction} from '../actions';
import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM_SUCCESS} from '../../constants';
import { AppStateModel } from '../model/app-state.model';

const initialState: AppStateModel = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
};

export function enthusiasm(state: AppStateModel = initialState, action: IAction<any>): AppStateModel {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM_SUCCESS:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default: {
            return state;
        }
    }
}