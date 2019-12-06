import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { entityConfig, OwnersDataServiceConfig } from './entity-metadata';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { OwnersFacade } from './owners.facade';
import * as fromOwners from './owners.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OwnersEffects } from './owners.effects';
import { NxModule } from '@nrwl/nx';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbAuthModule, NbAuthJWTInterceptor, NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
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
    // RouterModule.forChild([
    //   /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    // ]),
    EffectsModule.forFeature([OwnersEffects]),
    StoreModule.forFeature('owners', fromOwners.reducer)
  ],
  providers: [
    OwnersFacade,
    OwnersService,
    // { provide: DefaultDataServiceConfig, useValue: OwnersDataServiceConfig },
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function() {
        return false;
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbAuthJWTInterceptor,
      multi: true
    }
  ]
})
export class OwnersModule {}
