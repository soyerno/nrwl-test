import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { Shell } from '../shell/shell.service';


// { path: '', component: LandingComponent, data: { title: 'Ticmas' }, pathMatch: 'full'  }
const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: LandingComponent, data: { title: 'Ticmas' }, pathMatch: 'full'  }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LandingRoutingModule { }
