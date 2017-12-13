import Hello from '../components/Hello';
import { connect, Dispatch } from 'react-redux';
import { AppStateModel } from '../store/model/app-state.model';
import * as actions from '../store/actions';
import {IAction} from '../store/actions/index';

export function mapStateToProps({ enthusiasmLevel, languageName }: AppStateModel) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<IAction<any>>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        getRepos: () => dispatch(actions.getRepos())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);