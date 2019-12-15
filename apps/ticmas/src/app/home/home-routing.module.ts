import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from 'libs/auth/src/lib/auth';
import { HomeComponent } from './home.component';
import { Shell } from '../shell/shell.service';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: HomeComponent,
      data: { title: 'Cats And Owners' },
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'generator',
      component: FormGeneratorComponent,
      data: { title: 'Form Generator' },
      canActivate: [AuthenticationGuard]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
