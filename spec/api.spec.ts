
import * as api from '../src/api';
import WAPJSONReader from '../src/WAPJSONReader';
import APIDefault from '../src/api';

describe('Public API', () => {
    it('Named import', () => {
        expect(api.WAPJSONReader).toBe(WAPJSONReader);
    });

    it('Default import', () => {
        expect(APIDefault).toBe(WAPJSONReader);
    });
});
