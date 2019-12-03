import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map, tap } from 'rxjs/operators';

import { Cat } from './cats.model';
import { CatsService } from './cats.service';
import {
  addCat,
  CatsActionTypes,
  AddCatRequest,
  loadCats,
  LoadCatsRequest,
  deleteCat,
  DeleteCatRequest
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
  @Effect()
  loadCats$ = this.dataPersistence.fetch(CatsActionTypes.LoadCatsRequest, {
    run: (action: LoadCatsRequest, state: CatState) => {
      return this.catsService
        .getAll()
        .pipe(map((cats: Cat[]) => loadCats({ cats })));
    },
    onError: (action: LoadCatsRequest, error) => {
      console.error('Error', error);
    }
  });

  AddCat$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(CatsActionTypes.AddCatRequest, {
      run: (action: AddCatRequest, state: CatState) => {
        return this.catsService.add(action.cat).pipe(
          map((res: Cat) => {
            console.log(res);
            return addCat({ cat: res });
          })
        );
      },
      onError: (action: AddCatRequest, error) => {
        console.error('Error', error);
      }
    })
  );

  // @Effect()
  // updateProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.UpdateProject, {
  //   run: (action: UpdateProject, state: ProjectsState) => {
  //     return this.projectsService.update(action.payload).pipe(map((res: Project) => new ProjectUpdated(res)))
  //   },
  //   onError: (action: UpdateProject, error) => {
  //     console.error('Error', error);
  //   }
  // });

  DeleteCat$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(CatsActionTypes.DeleteCatRequest, {
      run: (action: DeleteCatRequest, state: CatState) => {
        return this.catsService.delete(action.cat).pipe(
          map((id: string) => {
            console.log(id);
            return deleteCat({ id });
          })
        );
      },
      onError: (action: DeleteCatRequest, error) => {
        console.error('Error', error);
      }
    })
  );
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
