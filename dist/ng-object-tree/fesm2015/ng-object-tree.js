import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgObjectTreeService {
    constructor() { }
}
NgObjectTreeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgObjectTreeService.ctorParameters = () => [];
/** @nocollapse */ NgObjectTreeService.ngInjectableDef = defineInjectable({ factory: function NgObjectTreeService_Factory() { return new NgObjectTreeService(); }, token: NgObjectTreeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgObjectTreeComponent {
    constructor() {
        this.entries = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('changes', changes);
        this.convertToJSONModel();
    }
    /**
     * @private
     * @return {?}
     */
    convertToJSONModel() {
        if (Array.isArray(this.jsonObject)) {
            this.entries = this.jsonObject.map(j => ({ key: j, value: j, expanded: false, expandable: false }));
        }
        else {
            /** @type {?} */
            const arr = Object.entries(this.jsonObject);
            arr.forEach((val, i) => {
                /** @type {?} */
                const entry = {
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
                this.entries.push(entry);
            });
        }
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    expandClick(entry) {
        entry.expanded = !entry.expanded;
    }
}
NgObjectTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-object-tree',
                template: "<ul>\n    <li *ngFor=\"let entry of entries\">\n        <!-- non-complex object key-value pairs -->\n        <span *ngIf=\"!entry.expandable && entry.key\">{{entry.key}}:</span> <span style=\"color:red\" *ngIf=\"!entry.expandable\">{{entry.value}}</span>\n\n        <!-- complex object expand link -->\n        <a *ngIf=\"entry.expandable\" href=\"#\" (click)=\"expandClick(entry)\">{{entry.key}}</a>\n\n        <lib-ng-object-tree *ngIf=\"entry.expanded\" [jsonObject]=\"entry.value\"></lib-ng-object-tree>\n    </li>\n</ul>"
            }] }
];
/** @nocollapse */
NgObjectTreeComponent.ctorParameters = () => [];
NgObjectTreeComponent.propDecorators = {
    jsonObject: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgObjectTreeModule {
}
NgObjectTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgObjectTreeComponent],
                imports: [
                    CommonModule
                ],
                exports: [NgObjectTreeComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgObjectTreeService, NgObjectTreeComponent, NgObjectTreeModule };

//# sourceMappingURL=ng-object-tree.js.map