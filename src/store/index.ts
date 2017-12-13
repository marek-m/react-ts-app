import {createSelector} from 'reselect';
import {AppStateModel} from './model/app-state.model';

const getRepos = (state: AppStateModel) => state.repos;
export const getRepoList = createSelector(getRepos, (repos) => {
   return repos.map((r) => r.name);
});