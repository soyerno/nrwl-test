import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Owner } from './owners.model';

@Injectable()
export class OwnersService extends EntityCollectionServiceBase<Owner> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Owners', serviceElementsFactory);
  }
}
