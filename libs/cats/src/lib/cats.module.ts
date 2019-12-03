import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { entityConfig } from './entity-metadata';
import { EntityDataModule } from '@ngrx/data';
import { CatsFacade } from './cats.facade';
import * as fromCats from './cats.reducer';

@NgModule({
  imports: [
    CommonModule,
    // EntityDataModule.forRoot(entityConfig),
    // RouterModule.forChild([
    //   /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    // ]),

    StoreModule.forFeature('cats', fromCats.reducer),
  ],
  providers: [CatsFacade]
})
export class CatsModule {}
