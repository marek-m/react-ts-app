import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../../constants';
import { AppStateModel } from '../model/app-state.model';

const initialState: AppStateModel = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
};

export function enthusiasm(state: AppStateModel = initialState, action: EnthusiasmAction): AppStateModel {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default: {
            return state;
        }
    }
}