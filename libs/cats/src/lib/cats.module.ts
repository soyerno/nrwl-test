import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { entityConfig, defaultDataServiceConfig } from './entity-metadata';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { CatsFacade } from './cats.facade';
import * as fromCats from './cats.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from './cats.effects';
import { NxModule } from '@nrwl/nx';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbAuthModule, NbAuthJWTInterceptor } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    NbAuthModule,
    EntityDataModule.forRoot(entityConfig),
    NxModule.forRoot(),
    // RouterModule.forChild([
    //   /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    // ]),
    EffectsModule.forFeature([CatsEffects]),
    StoreModule.forFeature('cats', fromCats.reducer)
  ],
  providers: [
    CatsFacade,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbAuthJWTInterceptor,
      multi: true
    }
  ]
})
export class CatsModule {}
