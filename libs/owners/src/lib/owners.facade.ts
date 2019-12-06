import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { OwnerState } from './owners.reducer';
import { ownersQuery } from './owners.selectors';
import { LoadOwnersRequest, addOwner, AddOwnerRequest, DeleteOwnerRequest, UpdateOwnerRequest } from './owners.actions';
import { Owner } from './owners.model';

@Injectable()
export class OwnersFacade {
  // loaded$ = this.store.select(ownersQuery.);
  allOwners$ = this.store.select(ownersQuery.selectAllOwners);
  selectedOwners$ = this.store.select(ownersQuery.selectCurrentOwner);

  constructor(private store: Store<OwnerState>) {}

  loadAll() {
    this.store.dispatch(new LoadOwnersRequest());
  }

  add(owner: Owner) {
    this.store.dispatch(new AddOwnerRequest(owner));
  }

  delete(owner : Owner) {
    this.store.dispatch(new DeleteOwnerRequest(owner));
  }

  update(owner : Owner) {
    this.store.dispatch(new UpdateOwnerRequest(owner));
  }
}
