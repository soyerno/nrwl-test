import { Entity, CoreState } from './core.reducer';
import { coreQuery } from './core.selectors';

describe('Core Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCoreId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCore = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      core: {
        list: [
          createCore('PRODUCT-AAA'),
          createCore('PRODUCT-BBB'),
          createCore('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Core Selectors', () => {
    it('getAllCore() should return the list of Core', () => {
      const results = coreQuery.getAllCore(storeState);
      const selId = getCoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCore() should return the selected Entity', () => {
      const result = coreQuery.getSelectedCore(storeState);
      const selId = getCoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = coreQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = coreQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
