import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Cat: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Cats' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
