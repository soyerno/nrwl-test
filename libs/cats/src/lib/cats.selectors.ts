import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCat from './cats.reducer';

export interface State {
  cats: fromCat.CatState;
}

export const reducers: ActionReducerMap<State> = {
  cats: fromCat.reducer,
};

export const selectCatState = createFeatureSelector<fromCat.CatState>('cats');

export const selectCatIds = createSelector(
  selectCatState,
  fromCat.selectCatIds // shorthand for catsState => fromCat.selectCatIds(catsState)
);
export const selectCatEntities = createSelector(
  selectCatState,
  fromCat.selectCatEntities
);
export const selectAllCats = createSelector(
  selectCatState,
  fromCat.selectAllCats
);
export const selectCatTotal = createSelector(
  selectCatState,
  fromCat.selectCatTotal
);
export const selectCurrentCatId = createSelector(
  selectCatState,
  fromCat.getSelectedCatId
);

export const selectCurrentCat = createSelector(
  selectCatEntities,
  selectCurrentCatId,
  (catEntities, catId) => catEntities[catId]
);

export const catsQuery = {
  selectAllCats,
  selectCatTotal,
  selectCurrentCat,
  selectCatEntities,
  selectCatIds
};
