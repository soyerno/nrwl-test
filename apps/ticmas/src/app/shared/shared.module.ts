import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { NbListModule, NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class SharedModule { }
