import {GET_REPOS, INCREMENT_ENTHUSIASM} from '../../constants';
import * as actions from '../actions';
import {ActionsObservable, combineEpics} from 'redux-observable';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {IAction} from '../actions/index';
import { ajax } from 'rxjs/observable/dom/ajax';

const increment$ = (actions$: ActionsObservable<IAction<any>>) => {
    return actions$
        .ofType(INCREMENT_ENTHUSIASM)
        .pipe(
            delay(1000),
            switchMap(() => {
                console.log('epic');
                return of(actions.incrementSuccess());
            })
        )
};

const GITHUB_GET_REPOS = 'https://api.github.com/users/marek-m/repos';

const fetchRepos$ = (actions$: ActionsObservable<IAction<any>>) => {
    return actions$
        .ofType(GET_REPOS)
        .pipe(
            switchMap(() => {
               return ajax.getJSON(GITHUB_GET_REPOS).pipe(
                   map((response: Array<{name: string}>) => {
                       response.map((item) => console.log(item.name));
                       return actions.getReposSuccess();
                   }),
                   catchError(() => of(actions.getReposSuccess()))
               )
            }))
};


export const rootEpic = combineEpics(
    increment$,
    fetchRepos$
);