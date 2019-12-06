import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromOwner from './owners.reducer';

export interface State {
  owners: fromOwner.OwnerState;
}

export const reducers: ActionReducerMap<State> = {
  owners: fromOwner.reducer,
};

export const selectOwnerState = createFeatureSelector<fromOwner.OwnerState>('owners');

export const selectOwnerIds = createSelector(
  selectOwnerState,
  fromOwner.selectOwnerIds // shorthand for ownersState => fromOwner.selectOwnerIds(ownersState)
);
export const selectOwnerEntities = createSelector(
  selectOwnerState,
  fromOwner.selectOwnerEntities
);
export const selectAllOwners = createSelector(
  selectOwnerState,
  fromOwner.selectAllOwners
);
export const selectOwnerTotal = createSelector(
  selectOwnerState,
  fromOwner.selectOwnerTotal
);
export const selectCurrentOwnerId = createSelector(
  selectOwnerState,
  fromOwner.getSelectedOwnerId
);

export const selectCurrentOwner = createSelector(
  selectOwnerEntities,
  selectCurrentOwnerId,
  (ownerEntities, ownerId) => ownerEntities[ownerId]
);

export const ownersQuery = {
  selectAllOwners,
  selectOwnerTotal,
  selectCurrentOwner,
  selectOwnerEntities,
  selectOwnerIds
};
