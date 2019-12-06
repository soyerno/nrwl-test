import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Owner } from './owners.model';
import * as OwnerActions from './owners.actions';

export interface OwnerState extends EntityState<Owner> {
  // additional entities state properties
  selectedOwnerId: number | null;
}

export const adapter: EntityAdapter<Owner> = createEntityAdapter<Owner>({
  selectId: (owner: Owner) => owner._id
});

export const initialState: OwnerState = adapter.getInitialState({
  // additional entity state properties
  selectedOwnerId: null
});

const ownerReducer = createReducer(
  initialState,
  on(OwnerActions.addOwner, (state, { owner }) => {
    return adapter.addOne(owner, state);
  }),
  on(OwnerActions.upsertOwner, (state, { owner }) => {
    return adapter.upsertOne(owner, state);
  }),
  on(OwnerActions.addOwners, (state, { owners }) => {
    return adapter.addMany(owners, state);
  }),
  on(OwnerActions.upsertOwners, (state, { owners }) => {
    return adapter.upsertMany(owners, state);
  }),
  on(OwnerActions.updateOwner, (state, { owner }) => {
    console.log(owner);
    return adapter.updateOne({ id: owner._id, changes: owner }, state);
  }),
  on(OwnerActions.updateOwners, (state, { owners }) => {
    return adapter.updateMany(owners, state);
  }),
  on(OwnerActions.mapOwners, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(OwnerActions.deleteOwner, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(OwnerActions.deleteOwners, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(OwnerActions.deleteOwnersByPredicate, (state, { prediownere }) => {
    return adapter.removeMany(prediownere, state);
  }),
  on(OwnerActions.loadOwners, (state, { owners }) => {
    return adapter.addAll(owners, state);
  }),
  on(OwnerActions.clearOwners, state => {
    return adapter.removeAll({ ...state, selectedOwnerId: null });
  })
);

export function reducer(state: OwnerState | undefined, action: Action) {
  return ownerReducer(state, action);
}

export const getSelectedOwnerId = (state: OwnerState) => state.selectedOwnerId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the array of owner ids
export const selectOwnerIds = selectIds;

// select the dictionary of owner entities
export const selectOwnerEntities = selectEntities;

// select the array of owners
export const selectAllOwners = selectAll;

// select the total owner count
export const selectOwnerTotal = selectTotal;
