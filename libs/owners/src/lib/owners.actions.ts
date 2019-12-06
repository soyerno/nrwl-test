import { createAction, props, Action } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';

import { Owner } from './owners.model';

export enum OwnersActionTypes {
  ProjectSelected = '[Projects] Selected',
  LoadOwnersRequest = '[Owners] Load Owners Data Request',
  AddOwnerRequest = '[Owners] Create Data Request',
  ProjectsLoaded = '[Projects] Data Loaded',
  AddProject = '[Projects] Add Data',
  ProjectAdded = '[Projects] Data Added',
  UpdateOwnerRequest = '[Owners] Update Data Request',
  ProjectUpdated = '[Projects] Data Updated',
  DeleteOwnerRequest = '[Owners] Delete Data Request',
  ProjectDeleted = '[Projects] Delete Data'
}

export class AddOwnerRequest implements Action {
  readonly type = OwnersActionTypes.AddOwnerRequest;
  constructor(public owner: Owner) { }
}

export class DeleteOwnerRequest implements Action {
  readonly type = OwnersActionTypes.DeleteOwnerRequest;
  constructor(public owner: Owner) { }
}

export class UpdateOwnerRequest implements Action {
  readonly type = OwnersActionTypes.UpdateOwnerRequest;
  constructor(public owner: Owner) { }
}
export class LoadOwnersRequest implements Action {
  readonly type = OwnersActionTypes.LoadOwnersRequest;
  constructor() { }
}

export const loadOwners = createAction('[Owner/API] Load Owners', props<{ owners: Owner[] }>());
export const addOwner = createAction('[Owner/API] Add Owner', props<{ owner: Owner }>());
export const upsertOwner = createAction('[Owner/API] Upsert Owner', props<{ owner: Owner }>());
export const addOwners = createAction('[Owner/API] Add Owners', props<{ owners: Owner[] }>());
export const upsertOwners = createAction('[Owner/API] Upsert Owners', props<{ owners: Owner[] }>());
export const updateOwner = createAction('[Owner/API] Update Owner', props<{ owner: Owner }>());
export const updateOwners = createAction('[Owner/API] Update Owners', props<{ owners: Update<Owner>[] }>());
export const mapOwners = createAction('[Owner/API] Map Owners', props<{ entityMap: EntityMap<Owner> }>());
export const deleteOwner = createAction('[Owner/API] Delete Owner', props<{ id: string }>());
export const deleteOwners = createAction('[Owner/API] Delete Owners', props<{ ids: string[] }>());
export const deleteOwnersByPredicate = createAction('[Owner/API] Delete Owners By Predicate', props<{ prediownere: Predicate<Owner> }>());
export const clearOwners = createAction('[Owner/API] Clear Owners');
