import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map, tap } from 'rxjs/operators';

import { Cat } from './cats.model';
import { CatsService } from './cats.service';
import {
  addCat,
  CatsActionTypes,
  AddCatCall
  // DeleteProject,
  // LoadProjects,
  // UpdateProject,
  // ProjectAdded,
  // ProjectDeleted,
  // ProjectsActionTypes,
  // ProjectsLoaded,
  // ProjectUpdated,
} from './cats.actions';
import { CatState } from './cats.reducer';

@Injectable({ providedIn: 'root' })
export class CatsEffects {
  // @Effect()
  // loadProjects$ = this.dataPersistence.fetch(ProjectsActionTypes.LoadProjects, {
  //   run: (action: LoadProjects, state: ProjectsState) => {
  //     return this.projectsService.all().pipe(map((res: Project[]) => new ProjectsLoaded(res)))
  //   },
  //   onError: (action: LoadProjects, error) => {
  //     console.error('Error', error);
  //   }
  // });

  AddCat$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(CatsActionTypes.AddCatCall, {
      run: (action: AddCatCall, state: CatState) => {
        return this.catsService
          .add(action.payload)
          .pipe(map((res: Cat) => addCat({ cat: res })));
      },
      onError: (action: AddCatCall, error) => {
        console.error('Error', error);
      }
    })
  );

  // @Effect()
  // addProject$ = this.dataPersistence.pessimisticUpdate(addCat.type, {
  //   run: (action: addCat.type, state: CatState) => {
  //     return this.catsService.add(action.payload).pipe(map((res: Cat) => addCat({cat: res})))
  //   },
  //   onError: (action: addCat, error) => {
  //     console.error('Error', error);
  //   }
  // });

  // @Effect()
  // updateProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.UpdateProject, {
  //   run: (action: UpdateProject, state: ProjectsState) => {
  //     return this.projectsService.update(action.payload).pipe(map((res: Project) => new ProjectUpdated(res)))
  //   },
  //   onError: (action: UpdateProject, error) => {
  //     console.error('Error', error);
  //   }
  // });

  // @Effect()
  // deleteProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.DeleteProject, {
  //   run: (action: DeleteProject, state: ProjectsState) => {
  //     return this.projectsService.delete(action.payload).pipe(map((res: Project) => new ProjectDeleted(res)))
  //   },
  //   onError: (action: DeleteProject, error) => {
  //     console.error('Error', error);
  //   }
  // });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CatState>,
    private catsService: CatsService
  ) {}
}
