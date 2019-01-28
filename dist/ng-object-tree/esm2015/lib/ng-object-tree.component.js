/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgObjectTreeComponent {
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
if (false) {
    /** @type {?} */
    NgObjectTreeComponent.prototype.jsonObject;
    /** @type {?} */
    NgObjectTreeComponent.prototype.entries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb2JqZWN0LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctb2JqZWN0LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctb2JqZWN0LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBUW5GLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEM7UUFGQSxZQUFPLEdBQWdCLEVBQUUsQ0FBQztJQUVWLENBQUM7Ozs7O0lBRWpCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRzthQUFNOztrQkFDQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRTNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3NCQUNmLEtBQUssR0FBYztvQkFDdkIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDaEMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3pCO2dCQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFnQjtRQUMxQixLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHloQkFBNEM7YUFFN0M7Ozs7O3lCQUlFLEtBQUs7Ozs7SUFBTiwyQ0FBeUI7O0lBQ3pCLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKU09OTW9kZWwgfSBmcm9tICcuL2pzb24tbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmctb2JqZWN0LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJ25nLW9iamVjdC10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ09iamVjdFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIC8vIG9wdGlvbiB0byBleHBhbmQgYXJyYXlzIGhvcml6b250YWxseVxuICBASW5wdXQoKSBqc29uT2JqZWN0OiBhbnk7XG4gIGVudHJpZXM6IEpTT05Nb2RlbFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMnLCBjaGFuZ2VzKTtcblxuICAgIHRoaXMuY29udmVydFRvSlNPTk1vZGVsKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb0pTT05Nb2RlbCgpOiBhbnkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuanNvbk9iamVjdCkpIHtcbiAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMuanNvbk9iamVjdC5tYXAoaiA9PiAoeyBrZXk6IGosIHZhbHVlOiBqLCBleHBhbmRlZDogZmFsc2UsIGV4cGFuZGFibGU6IGZhbHNlIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXModGhpcy5qc29uT2JqZWN0KTtcblxuICAgICAgYXJyLmZvckVhY2goKHZhbCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeTogSlNPTk1vZGVsID0ge1xuICAgICAgICAgIGtleTogdmFsWzBdLFxuICAgICAgICAgIGV4cGFuZGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgKHZhbFsxXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZW50cnkudmFsdWUgPSB2YWxbMV07XG4gICAgICAgICAgZW50cnkuZXhwYW5kYWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudHJ5LnZhbHVlID0gdmFsWzFdO1xuICAgICAgICAgIGVudHJ5LmV4cGFuZGFibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZXhwYW5kQ2xpY2soZW50cnk6IEpTT05Nb2RlbCkge1xuICAgIGVudHJ5LmV4cGFuZGVkID0gIWVudHJ5LmV4cGFuZGVkO1xuICB9XG59XG4iXX0=