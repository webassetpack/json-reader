
import * as api from '../src/api';
import WAPJSON from '../src/WAPJSON';
import APIDefault from '../src/api';

describe('Public API', () => {
    it('Named import', () => {
        expect(api.WAPJSON).toBe(WAPJSON);
    });

    it('Default import', () => {
        expect(APIDefault).toBe(WAPJSON);
    });
});
