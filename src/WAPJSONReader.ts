
import {WAPPlugin} from '@wap/core';
import {IDictionary} from '@totalpave/interfaces';

export class WAPJSONReader extends WAPPlugin<IDictionary> {
    protected async _read(data: Uint8Array): Promise<IDictionary> {
        return JSON.parse(String.fromCharCode.apply(null, data));
    }
}

export default WAPJSONReader;
