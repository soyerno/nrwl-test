import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCore from './+state/core.reducer';
import { CoreEffects } from './+state/core.effects';
import { CoreFacade } from './+state/core.facade';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature(fromCore.CORE_FEATURE_KEY, fromCore.reducer),
    EffectsModule.forFeature([CoreEffects])
  ],
  declarations: [HomeComponent],
  providers: [CoreFacade]
})
export class HomeModule {}
