import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import {
  NbListModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbRadioModule,
  NbCheckboxModule,
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbToggleModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbToggleModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule
  ],
  declarations: [LoaderComponent],
  exports: [
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbToggleModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule
  ]
})
export class SharedModule {}
