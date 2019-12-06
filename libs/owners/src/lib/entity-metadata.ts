import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../../apps/ticmas/src/environments/environment'
const entityMetadata: EntityMetadataMap = {
  Owners: {
    selectId: ownerSelectId,
  }
};

// because the plural of "hero" is not "heros"
const pluralNames = { Owner: 'Owners' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};

export const OwnersDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.serverUrl,
  entityHttpResourceUrls: {
    Owners: {
      entityResourceUrl: '/owners/',
      collectionResourceUrl: '/owners'
    }
  }
};

export function ownerSelectId<T extends { _id: any }>(entity: T) {
  return entity == null ? undefined : entity._id;
}
