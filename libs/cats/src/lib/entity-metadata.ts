import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../../apps/ticmas/src/environments/environment'
const entityMetadata: EntityMetadataMap = {
  Cats: {
    selectId: catSelectId,
  }
};

// because the plural of "hero" is not "heros"
const pluralNames = { Cat: 'Cats' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.serverUrl,
  entityHttpResourceUrls: {
    Cats: {
      entityResourceUrl: '/cats/',
      collectionResourceUrl: '/cats'
    }
  }
};

export function catSelectId<T extends { _id: any }>(entity: T) {
  return entity == null ? undefined : entity._id;
}
