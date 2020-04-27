"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var WAPJSON = /** @class */ (function (_super) {
    tslib_1.__extends(WAPJSON, _super);
    function WAPJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WAPJSON.prototype._read = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, JSON.parse(String.fromCharCode.apply(null, data))];
            });
        });
    };
    return WAPJSON;
}(core_1.WAPPlugin));
exports.WAPJSON = WAPJSON;
exports["default"] = WAPJSON;
//# sourceMappingURL=WAPJSON.js.map