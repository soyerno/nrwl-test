import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CORE_FEATURE_KEY, CoreState } from './core.reducer';

// Lookup the 'Core' feature state managed by NgRx
const getCoreState = createFeatureSelector<CoreState>(CORE_FEATURE_KEY);

const getLoaded = createSelector(
  getCoreState,
  (state: CoreState) => state.loaded
);
const getError = createSelector(
  getCoreState,
  (state: CoreState) => state.error
);

const getAllCore = createSelector(
  getCoreState,
  getLoaded,
  (state: CoreState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCoreState,
  (state: CoreState) => state.selectedId
);
const getSelectedCore = createSelector(
  getAllCore,
  getSelectedId,
  (core, id) => {
    const result = core.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const coreQuery = {
  getLoaded,
  getError,
  getAllCore,
  getSelectedCore
};
