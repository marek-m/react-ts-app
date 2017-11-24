import Hello from '../components/Hello';
import { connect, Dispatch } from 'react-redux';
import { AppStateModel } from '../store/model/app-state.model';
import * as actions from '../store/actions';

export function mapStateToProps({ enthusiasmLevel, languageName }: AppStateModel) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);