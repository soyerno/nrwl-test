import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { entityConfig, defaultDataServiceConfig } from './entity-metadata';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { CatsFacade } from './cats.facade';
import * as fromCats from './cats.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from './cats.effects';
import { NxModule } from '@nrwl/nx';

@NgModule({
  imports: [
    CommonModule,
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
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class CatsModule {}
