import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CoreEffects } from './core.effects';
import { LoadCore, CoreLoaded } from './core.actions';

describe('CoreEffects', () => {
  let actions: Observable<any>;
  let effects: CoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CoreEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CoreEffects);
  });

  describe('loadCore$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCore() });
      expect(effects.loadCore$).toBeObservable(
        hot('-a-|', { a: new CoreLoaded([]) })
      );
    });
  });
});
