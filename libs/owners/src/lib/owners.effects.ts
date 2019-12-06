import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map, tap } from 'rxjs/operators';

import { Owner } from './owners.model';
import { OwnersService } from './owners.service';
import {
  addOwner,
  OwnersActionTypes,
  AddOwnerRequest,
  loadOwners,
  LoadOwnersRequest,
  deleteOwner,
  DeleteOwnerRequest,
  UpdateOwnerRequest,
  updateOwner
  // DeleteProject,
  // LoadProjects,
  // UpdateProject,
  // ProjectAdded,
  // ProjectDeleted,
  // ProjectsActionTypes,
  // ProjectsLoaded,
  // ProjectUpdated,
} from './owners.actions';
import { OwnerState } from './owners.reducer';
import { Update } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })
export class OwnersEffects {
  @Effect()
  loadOwners$ = this.dataPersistence.fetch(OwnersActionTypes.LoadOwnersRequest, {
    run: (action: LoadOwnersRequest, state: OwnerState) => {
      return this.ownersService
        .getAll()
        .pipe(map((owners: Owner[]) => loadOwners({ owners })));
    },
    onError: (action: LoadOwnersRequest, error) => {
      console.error('Error', error);
    }
  });

  AddOwner$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(OwnersActionTypes.AddOwnerRequest, {
      run: (action: AddOwnerRequest, state: OwnerState) => {
        return this.ownersService.add(action.owner).pipe(
          map((res: Owner) => {
            return addOwner({ owner: res });
          })
        );
      },
      onError: (action: AddOwnerRequest, error) => {
        console.error('Error', error);
      }
    })
  );

  UpdateOwner$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(OwnersActionTypes.UpdateOwnerRequest, {
      run: (action: UpdateOwnerRequest, state: OwnerState) => {
        return this.ownersService.update(action.owner).pipe(
          map((res: any) => {
            console.log(res)
            return updateOwner({ owner: res });
          })
        );
      },
      onError: (action: UpdateOwnerRequest, error) => {
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

  DeleteOwner$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(OwnersActionTypes.DeleteOwnerRequest, {
      run: (action: DeleteOwnerRequest, state: OwnerState) => {
        return this.ownersService.delete(action.owner).pipe(
          map((id: string) => {
            return deleteOwner({ id });
          })
        );
      },
      onError: (action: DeleteOwnerRequest, error) => {
        console.error('Error', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<OwnerState>,
    private ownersService: OwnersService
  ) {}
}
