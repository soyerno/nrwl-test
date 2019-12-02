import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
  ],
  exports:[
    ShellComponent
  ],
  declarations: [
    HeaderComponent,
    ShellComponent
  ]
})
export class ShellModule {
}
