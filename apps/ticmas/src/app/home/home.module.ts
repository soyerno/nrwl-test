import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { CatsModule } from 'libs/cats/src';
import { CatsFacade } from 'libs/cats/src/lib/cats.facade';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    CatsModule,
  ],
  providers:[
    CatsFacade
  ],
  declarations: [HomeComponent, ListComponent],
})
export class HomeModule {}
