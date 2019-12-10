import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { entityConfig } from './entity-metadata';
import { EntityDataModule } from '@ngrx/data';
import { OwnersFacade } from './owners.facade';
import * as fromOwners from './owners.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OwnersEffects } from './owners.effects';
import { NxModule } from '@nrwl/nx';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnersService } from './owners.service';

@NgModule({
  imports: [
    CommonModule,
    NbAuthModule,
    FormsModule,
    ReactiveFormsModule,
    EntityDataModule.forRoot(entityConfig),
    NxModule.forRoot(),
    EffectsModule.forFeature([OwnersEffects]),
    StoreModule.forFeature('owners', fromOwners.reducer)
  ],
  providers: [
    OwnersFacade,
    OwnersService
  ]
})
export class OwnersModule {}
