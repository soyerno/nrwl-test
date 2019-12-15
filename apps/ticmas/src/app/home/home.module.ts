import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { CatsModule, CatsFacade } from '@ticmasworkspace/cats';
import { OwnersModule, OwnersFacade } from '@ticmasworkspace/owners';
import { ListComponent } from './crud/list/list.component';
import { CrudComponent } from './crud/crud.component';
import { InputControlService } from './dynamic-form/input-control.service';
import { DynamicFormInputComponent } from './dynamic-form/dynamic-input/dynamic-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DefaultDataServiceConfig } from '@ngrx/data';
import { CatsDataServiceConfig } from '@ticmasworkspace/cats';
import { OwnersDataServiceConfig } from '@ticmasworkspace/owners';
import { ShellModule } from '../shell/shell.module';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { FormGeneratorAddInputComponent } from './form-generator/form-generator-add-input/form-generator-add-input.component';
import { DynamicFormInputEditableControlsComponent } from './dynamic-form/dynamic-input-editable-controls/dynamic-form-input-editable-controls.component';
import { DynamicFormInputEditableOptionsComponent } from './dynamic-form/dynamic-input-editable-options/dynamic-input-editable-options.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShellModule,
    HomeRoutingModule,
    CatsModule,
    OwnersModule
  ],
  providers: [
    CatsFacade,
    OwnersFacade,
    InputControlService,
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        ...CatsDataServiceConfig,
        ...{
          entityHttpResourceUrls: {
            ...OwnersDataServiceConfig.entityHttpResourceUrls,
            ...CatsDataServiceConfig.entityHttpResourceUrls
          }
        }
      }
    }
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    CrudComponent,
    DynamicFormComponent,
    DynamicFormInputComponent,
    FormGeneratorComponent,
    FormGeneratorAddInputComponent,
    DynamicFormInputEditableControlsComponent,
    DynamicFormInputEditableOptionsComponent
  ]
})
export class HomeModule {}
