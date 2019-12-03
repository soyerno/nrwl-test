import { createAction, props, Action } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';

import { Cat } from './cats.model';

export enum CatsActionTypes {
  ProjectSelected = '[Projects] Selected',
  AddCatCall = '[Cats] Create Data',
  AddCatCallError = '[Cats] Create Data Error',
  ProjectsLoaded = '[Projects] Data Loaded',
  AddProject = '[Projects] Add Data',
  ProjectAdded = '[Projects] Data Added',
  UpdateProject = '[Projects] Update Data',
  ProjectUpdated = '[Projects] Data Updated',
  DeleteProject = '[Projects] Delete Data',
  ProjectDeleted = '[Projects] Delete Data'
}

export class AddCatCall implements Action {
  readonly type = CatsActionTypes.AddCatCall;
  constructor(public payload: Cat) { }
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
