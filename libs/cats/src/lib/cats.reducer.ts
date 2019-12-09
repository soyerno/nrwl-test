import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cat } from './cats.model';
import * as CatActions from './cats.actions';

export interface CatState extends EntityState<Cat> {
  // additional entities state properties
  selectedCatId: number | null;
}

export const adapter: EntityAdapter<Cat> = createEntityAdapter<Cat>({
  selectId: (cat: Cat) => cat._id
});

export const initialState: CatState = adapter.getInitialState({
  // additional entity state properties
  selectedCatId: null
});

const catReducer = createReducer(
  initialState,
  on(CatActions.addCat, (state, { cat }) => {
    return adapter.addOne(cat, state);
  }),
  on(CatActions.upsertCat, (state, { cat }) => {
    return adapter.upsertOne(cat, state);
  }),
  on(CatActions.addCats, (state, { cats }) => {
    return adapter.addMany(cats, state);
  }),
  on(CatActions.upsertCats, (state, { cats }) => {
    return adapter.upsertMany(cats, state);
  }),
  on(CatActions.updateCat, (state, { cat }) => {
    return adapter.updateOne({ id: cat._id, changes: cat }, state);
  }),
  on(CatActions.updateCats, (state, { cats }) => {
    return adapter.updateMany(cats, state);
  }),
  on(CatActions.mapCats, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(CatActions.deleteCat, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(CatActions.deleteCats, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(CatActions.deleteCatsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(CatActions.loadCats, (state, { cats }) => {
    return adapter.addAll(cats, state);
  }),
  on(CatActions.clearCats, state => {
    return adapter.removeAll({ ...state, selectedCatId: null });
  })
);

export function reducer(state: CatState | undefined, action: Action) {
  return catReducer(state, action);
}

export const getSelectedCatId = (state: CatState) => state.selectedCatId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the array of cat ids
export const selectCatIds = selectIds;

// select the dictionary of cat entities
export const selectCatEntities = selectEntities;

// select the array of cats
export const selectAllCats = selectAll;

// select the total cat count
export const selectCatTotal = selectTotal;
