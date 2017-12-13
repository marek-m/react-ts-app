import Hello from '../components/Hello';
import { connect, Dispatch } from 'react-redux';
import { AppStateModel } from '../store/model/app-state.model';
import * as actions from '../store/actions';
import {IAction} from '../store/actions/index';
import {getRepoList} from '../store/index';

export function mapStateToProps(state: AppStateModel) {
    return {
        enthusiasmLevel: state.enthusiasmLevel,
        name: state.languageName,
        repos: getRepoList(state)
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