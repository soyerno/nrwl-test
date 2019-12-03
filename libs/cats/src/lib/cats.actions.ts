import { createAction, props, Action } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';

import { Cat } from './cats.model';

export enum CatsActionTypes {
  ProjectSelected = '[Projects] Selected',
  LoadCatsRequest = '[Cats] Load Cats Data Request',
  AddCatRequest = '[Cats] Create Data Request',
  ProjectsLoaded = '[Projects] Data Loaded',
  AddProject = '[Projects] Add Data',
  ProjectAdded = '[Projects] Data Added',
  UpdateCatRequest = '[Cats] Update Data Request',
  ProjectUpdated = '[Projects] Data Updated',
  DeleteCatRequest = '[Cats] Delete Data Request',
  ProjectDeleted = '[Projects] Delete Data'
}

export class AddCatRequest implements Action {
  readonly type = CatsActionTypes.AddCatRequest;
  constructor(public cat: Cat) { }
}

export class DeleteCatRequest implements Action {
  readonly type = CatsActionTypes.DeleteCatRequest;
  constructor(public cat: Cat) { }
}

export class UpdateCatRequest implements Action {
  readonly type = CatsActionTypes.UpdateCatRequest;
  constructor(public cat: Cat) { }
}
export class LoadCatsRequest implements Action {
  readonly type = CatsActionTypes.LoadCatsRequest;
  constructor() { }
}

export const loadCats = createAction('[Cat/API] Load Cats', props<{ cats: Cat[] }>());
export const addCat = createAction('[Cat/API] Add Cat', props<{ cat: Cat }>());
export const upsertCat = createAction('[Cat/API] Upsert Cat', props<{ cat: Cat }>());
export const addCats = createAction('[Cat/API] Add Cats', props<{ cats: Cat[] }>());
export const upsertCats = createAction('[Cat/API] Upsert Cats', props<{ cats: Cat[] }>());
export const updateCat = createAction('[Cat/API] Update Cat', props<{ cat: Update<Cat> }>());
export const updateCats = createAction('[Cat/API] Update Cats', props<{ cats: Update<Cat>[] }>());
export const mapCats = createAction('[Cat/API] Map Cats', props<{ entityMap: EntityMap<Cat> }>());
export const deleteCat = createAction('[Cat/API] Delete Cat', props<{ id: string }>());
export const deleteCats = createAction('[Cat/API] Delete Cats', props<{ ids: string[] }>());
export const deleteCatsByPredicate = createAction('[Cat/API] Delete Cats By Predicate', props<{ predicate: Predicate<Cat> }>());
export const clearCats = createAction('[Cat/API] Clear Cats');
