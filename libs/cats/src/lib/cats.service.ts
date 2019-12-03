import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Cats } from './cats';

@Injectable({ providedIn: 'root' })
export class CatsService extends EntityCollectionServiceBase<Cats> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cats', serviceElementsFactory);
  }
}
