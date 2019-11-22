import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CorePartialState } from './core.reducer';
import { coreQuery } from './core.selectors';
import { LoadCore } from './core.actions';

@Injectable()
export class CoreFacade {
  loaded$ = this.store.pipe(select(coreQuery.getLoaded));
  allCore$ = this.store.pipe(select(coreQuery.getAllCore));
  selectedCore$ = this.store.pipe(select(coreQuery.getSelectedCore));

  constructor(private store: Store<CorePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCore());
  }
}
