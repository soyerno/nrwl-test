import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../../apps/ticmas/src/environments/environment'
const entityMetadata: EntityMetadataMap = {
  Cats: {}
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
      entityResourceUrl: '/cats',
      collectionResourceUrl: '/cats'
    }
  }
};
