import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var NgObjectTreeComponent = /** @class */ (function () {
    function NgObjectTreeComponent() {
        this.entries = [];
    }
    NgObjectTreeComponent.prototype.ngOnChanges = function (changes) {
        this.convertToJSONModel();
    };
    NgObjectTreeComponent.prototype.convertToJSONModel = function () {
        var _this = this;
        if (Array.isArray(this.jsonObject)) {
            this.entries = this.jsonObject.map(function (j) { return ({ key: undefined, value: j, expanded: false, expandable: false }); });
        }
        else {
            var arr = Object.entries(this.jsonObject);
            arr.forEach(function (val, i) {
                var entry = {
                    key: val[0],
                    expanded: false
                };
                if (typeof (val[1]) === 'string') {
                    entry.value = val[1];
                    entry.expandable = false;
                }
                else {
                    entry.value = val[1];
                    entry.expandable = true;
                }
                _this.entries.push(entry);
            });
        }
    };
    NgObjectTreeComponent.prototype.expandClick = function (entry) {
        entry.expanded = !entry.expanded;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NgObjectTreeComponent.prototype, "jsonObject", void 0);
    NgObjectTreeComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-ng-object-tree',
            templateUrl: 'ng-object-tree.component.html',
            changeDetection: ChangeDetectionStrategy.Default
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgObjectTreeComponent);
    return NgObjectTreeComponent;
}());
export { NgObjectTreeComponent };
//# sourceMappingURL=ng-object-tree.component.js.map