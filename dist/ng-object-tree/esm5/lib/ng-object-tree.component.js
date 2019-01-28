/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'lib-ng-object-tree',
                    template: "<ul>\n    <li *ngFor=\"let entry of entries\">\n        <!-- non-complex object key-value pairs -->\n        <span *ngIf=\"!entry.expandable && entry.key\">{{entry.key}}:</span> <span style=\"color:red\" *ngIf=\"!entry.expandable\">{{entry.value}}</span>\n\n        <!-- complex object expand link -->\n        <a *ngIf=\"entry.expandable\" href=\"#\" (click)=\"expandClick(entry)\">{{entry.key}}</a>\n\n        <lib-ng-object-tree *ngIf=\"entry.expanded\" [jsonObject]=\"entry.value\"></lib-ng-object-tree>\n    </li>\n</ul>"
                }] }
    ];
    /** @nocollapse */
    NgObjectTreeComponent.ctorParameters = function () { return []; };
    NgObjectTreeComponent.propDecorators = {
        jsonObject: [{ type: Input }]
    };
    return NgObjectTreeComponent;
}());
export { NgObjectTreeComponent };
if (false) {
    /** @type {?} */
    NgObjectTreeComponent.prototype.jsonObject;
    /** @type {?} */
    NgObjectTreeComponent.prototype.entries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb2JqZWN0LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctb2JqZWN0LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctb2JqZWN0LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR25GO0lBV0U7UUFGQSxZQUFPLEdBQWdCLEVBQUUsQ0FBQztJQUVWLENBQUM7Ozs7O0lBRWpCLDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLGtEQUFrQjs7OztJQUExQjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQztTQUNyRzthQUFNOztnQkFDQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRTNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQzs7b0JBQ1gsS0FBSyxHQUFjO29CQUN2QixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDWCxRQUFRLEVBQUUsS0FBSztpQkFDaEI7Z0JBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNoQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDekI7Z0JBRUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLEtBQWdCO1FBQzFCLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIseWhCQUE0QztpQkFFN0M7Ozs7OzZCQUlFLEtBQUs7O0lBdUNSLDRCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1kscUJBQXFCOzs7SUFHaEMsMkNBQXlCOztJQUN6Qix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSlNPTk1vZGVsIH0gZnJvbSAnLi9qc29uLW1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5nLW9iamVjdC10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICduZy1vYmplY3QtdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdPYmplY3RUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAvLyBvcHRpb24gdG8gZXhwYW5kIGFycmF5cyBob3Jpem9udGFsbHlcbiAgQElucHV0KCkganNvbk9iamVjdDogYW55O1xuICBlbnRyaWVzOiBKU09OTW9kZWxbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzJywgY2hhbmdlcyk7XG5cbiAgICB0aGlzLmNvbnZlcnRUb0pTT05Nb2RlbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9KU09OTW9kZWwoKTogYW55IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmpzb25PYmplY3QpKSB7XG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLmpzb25PYmplY3QubWFwKGogPT4gKHsga2V5OiBqLCB2YWx1ZTogaiwgZXhwYW5kZWQ6IGZhbHNlLCBleHBhbmRhYmxlOiBmYWxzZSB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKHRoaXMuanNvbk9iamVjdCk7XG5cbiAgICAgIGFyci5mb3JFYWNoKCh2YWwsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnk6IEpTT05Nb2RlbCA9IHtcbiAgICAgICAgICBrZXk6IHZhbFswXSxcbiAgICAgICAgICBleHBhbmRlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mICh2YWxbMV0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGVudHJ5LnZhbHVlID0gdmFsWzFdO1xuICAgICAgICAgIGVudHJ5LmV4cGFuZGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbFsxXTtcbiAgICAgICAgICBlbnRyeS5leHBhbmRhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZENsaWNrKGVudHJ5OiBKU09OTW9kZWwpIHtcbiAgICBlbnRyeS5leHBhbmRlZCA9ICFlbnRyeS5leHBhbmRlZDtcbiAgfVxufVxuIl19