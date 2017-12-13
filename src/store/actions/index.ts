import * as constants from '../../constants';

export interface IAction<T> {
    type: string;
    payload?: T;
}

export function incrementEnthusiasm(): IAction<void> {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): IAction<void> {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function incrementSuccess() {
    return {
        type: constants.INCREMENT_ENTHUSIASM_SUCCESS
    };
}

export function getRepos() {
    return {
        type: constants.GET_REPOS
    };
}

export function getReposSuccess() {
    return {
        type: constants.GET_REPOS_SUCCESS
    };
}