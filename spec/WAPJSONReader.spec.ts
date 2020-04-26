
import {
    WAPTestTools,
    WAPReader,
    WebAssetPack,
    PluginManager
} from '@wap/test-tools';
import WAPJSONReader from '../src/WAPJSONReader';
import def from './support/def.json';
import expectation from './support/test-pkg/data.json';

describe('WAPJSONReader', () => {
    let reader: WAPReader = new WAPReader();

    beforeAll(() => {
        PluginManager.getInstance().addPlugin('json', new WAPJSONReader());
    });

    it('reads file properly', async () => {
        let buffer: ArrayBuffer = await WAPTestTools.compile(def);
        let pack: WebAssetPack = await reader.read(buffer);
        let data: any = await pack.get('test.json');
        expect(data).toEqual(expectation);
    });
});
