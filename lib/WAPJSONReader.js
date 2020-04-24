"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var WAPJSONReader = /** @class */ (function (_super) {
    tslib_1.__extends(WAPJSONReader, _super);
    function WAPJSONReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WAPJSONReader.prototype._read = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, JSON.parse(String.fromCharCode.apply(null, data))];
            });
        });
    };
    return WAPJSONReader;
}(core_1.WAPPlugin));
exports.WAPJSONReader = WAPJSONReader;
exports["default"] = WAPJSONReader;
//# sourceMappingURL=WAPJSONReader.js.map