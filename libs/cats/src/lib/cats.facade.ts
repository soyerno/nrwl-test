import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { CatState } from './cats.reducer';
import { catsQuery } from './cats.selectors';
import { LoadCatsRequest, addCat, AddCatRequest } from './cats.actions';
import { Cat } from './cats.model';

@Injectable()
export class CatsFacade {
  // loaded$ = this.store.select(catsQuery.);
  allCats$ = this.store.select(catsQuery.selectAllCats);
  selectedCats$ = this.store.select(catsQuery.selectCurrentCat);

  constructor(private store: Store<CatState>) {}

  loadAll() {
    this.store.dispatch(new LoadCatsRequest());
  }

  add(cat: Cat) {
    // this.store.dispatch(addCat({cat}));
    this.store.dispatch(new AddCatRequest(cat));
  }
}
