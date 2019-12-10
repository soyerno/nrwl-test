import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { entityConfig, CatsDataServiceConfig } from './entity-metadata';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { CatsFacade } from './cats.facade';
import * as fromCats from './cats.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from './cats.effects';
import { NxModule } from '@nrwl/nx';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsService } from './cats.service';

@NgModule({
  imports: [
    CommonModule,
    NbAuthModule,
    FormsModule,
    ReactiveFormsModule,
    EntityDataModule.forRoot(entityConfig),
    NxModule.forRoot(),
    EffectsModule.forFeature([CatsEffects]),
    StoreModule.forFeature('cats', fromCats.reducer)
  ],
  providers: [
    CatsFacade,
    CatsService,
    { provide: DefaultDataServiceConfig, useValue: CatsDataServiceConfig }
  ]
})
export class CatsModule {}
