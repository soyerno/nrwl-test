import { CoreAction, CoreActionTypes } from './core.actions';

export const CORE_FEATURE_KEY = 'core';

/**
 * Interface for the 'Core' data used in
 *  - CoreState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CoreState {
  list: Entity[]; // list of Core; analogous to a sql normalized table
  selectedId?: string | number; // which Core record has been selected
  loaded: boolean; // has the Core list been loaded
  error?: any; // last none error (if any)
}

export interface CorePartialState {
  readonly [CORE_FEATURE_KEY]: CoreState;
}

export const initialState: CoreState = {
  list: [],
  loaded: false
};

export function reducer(
  state: CoreState = initialState,
  action: CoreAction
): CoreState {
  switch (action.type) {
    case CoreActionTypes.CoreLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
