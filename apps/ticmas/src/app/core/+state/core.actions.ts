import { Action } from '@ngrx/store';
import { Entity } from './core.reducer';

export enum CoreActionTypes {
  LoadCore = '[Core] Load Core',
  CoreLoaded = '[Core] Core Loaded',
  CoreLoadError = '[Core] Core Load Error'
}

export class LoadCore implements Action {
  readonly type = CoreActionTypes.LoadCore;
}

export class CoreLoadError implements Action {
  readonly type = CoreActionTypes.CoreLoadError;
  constructor(public payload: any) {}
}

export class CoreLoaded implements Action {
  readonly type = CoreActionTypes.CoreLoaded;
  constructor(public payload: Entity[]) {}
}

export type CoreAction = LoadCore | CoreLoaded | CoreLoadError;

export const fromCoreActions = {
  LoadCore,
  CoreLoaded,
  CoreLoadError
};
