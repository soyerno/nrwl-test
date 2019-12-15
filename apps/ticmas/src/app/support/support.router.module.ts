import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportComponent } from './support.component';
import { Shell } from '../shell/shell.service';


// { path: '', component: SupportComponent, data: { title: 'Ticmas' }, pathMatch: 'full'  }
const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: SupportComponent, data: { title: 'Support' }, pathMatch: 'full'  }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SupportRoutingModule { }
