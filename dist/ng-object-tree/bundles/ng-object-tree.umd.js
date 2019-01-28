(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-object-tree', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng-object-tree'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgObjectTreeService = /** @class */ (function () {
        function NgObjectTreeService() {
        }
        NgObjectTreeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgObjectTreeService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgObjectTreeService.ngInjectableDef = i0.defineInjectable({ factory: function NgObjectTreeService_Factory() { return new NgObjectTreeService(); }, token: NgObjectTreeService, providedIn: "root" });
        return NgObjectTreeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgObjectTreeComponent = /** @class */ (function () {
        function NgObjectTreeComponent() {
            this.entries = [];
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgObjectTreeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                console.log('changes', changes);
                this.convertToJSONModel();
            };
        /**
         * @private
         * @return {?}
         */
        NgObjectTreeComponent.prototype.convertToJSONModel = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (Array.isArray(this.jsonObject)) {
                    this.entries = this.jsonObject.map(function (j) { return ({ key: j, value: j, expanded: false, expandable: false }); });
                }
                else {
                    /** @type {?} */
                    var arr = Object.entries(this.jsonObject);
                    arr.forEach(function (val, i) {
                        /** @type {?} */
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
        /**
         * @param {?} entry
         * @return {?}
         */
        NgObjectTreeComponent.prototype.expandClick = /**
         * @param {?} entry
         * @return {?}
         */
            function (entry) {
                entry.expanded = !entry.expanded;
            };
        NgObjectTreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-ng-object-tree',
                        template: "<ul>\n    <li *ngFor=\"let entry of entries\">\n        <!-- non-complex object key-value pairs -->\n        <span *ngIf=\"!entry.expandable && entry.key\">{{entry.key}}:</span> <span style=\"color:red\" *ngIf=\"!entry.expandable\">{{entry.value}}</span>\n\n        <!-- complex object expand link -->\n        <a *ngIf=\"entry.expandable\" href=\"#\" (click)=\"expandClick(entry)\">{{entry.key}}</a>\n\n        <lib-ng-object-tree *ngIf=\"entry.expanded\" [jsonObject]=\"entry.value\"></lib-ng-object-tree>\n    </li>\n</ul>"
                    }] }
        ];
        /** @nocollapse */
        NgObjectTreeComponent.ctorParameters = function () { return []; };
        NgObjectTreeComponent.propDecorators = {
            jsonObject: [{ type: i0.Input }]
        };
        return NgObjectTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgObjectTreeModule = /** @class */ (function () {
        function NgObjectTreeModule() {
        }
        NgObjectTreeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgObjectTreeComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [NgObjectTreeComponent]
                    },] }
        ];
        return NgObjectTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgObjectTreeService = NgObjectTreeService;
    exports.NgObjectTreeComponent = NgObjectTreeComponent;
    exports.NgObjectTreeModule = NgObjectTreeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-object-tree.umd.js.map