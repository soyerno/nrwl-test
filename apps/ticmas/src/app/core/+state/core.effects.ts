import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { CorePartialState } from './core.reducer';
import {
  LoadCore,
  CoreLoaded,
  CoreLoadError,
  CoreActionTypes
} from './core.actions';

@Injectable()
export class CoreEffects {
  @Effect() loadCore$ = this.dataPersistence.fetch(CoreActionTypes.LoadCore, {
    run: (action: LoadCore, state: CorePartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new CoreLoaded([]);
    },

    onError: (action: LoadCore, error) => {
      console.error('Error', error);
      return new CoreLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CorePartialState>
  ) {}
}
