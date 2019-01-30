import * as tslib_1 from "tslib";
import { async, TestBed } from '@angular/core/testing';
import { NgObjectTreeComponent } from './ng-object-tree.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
var TestComponentWrapperComponent = /** @class */ (function () {
    function TestComponentWrapperComponent() {
        this.jsonObject = {
            'test-key': 'test-value',
            'test-key122': 'test-value1',
            'test-key2': 'test-value2',
            'test-key3': 'test-value3'
        };
    }
    TestComponentWrapperComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-test-component-wrapper',
            template: '<lib-ng-object-tree [jsonObject]="jsonObject"></lib-ng-object-tree>'
        })
    ], TestComponentWrapperComponent);
    return TestComponentWrapperComponent;
}());
describe('NgObjectTreeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NgObjectTreeComponent, TestComponentWrapperComponent],
            imports: [CommonModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        // fixture = TestBed.createComponent(NgObjectTreeComponent);
        // component = fixture.componentInstance;
        // const de = fixture.debugElement;
        // de.query(By.css('h1));
        // fixture.detectChanges();
    });
    it('should create', function () {
        fixture = TestBed.createComponent(TestComponentWrapperComponent);
        component = fixture.debugElement.childNodes[0].componentInstance;
        fixture.detectChanges();
        var entries = fixture.nativeElement.querySelectorAll('.obj-entry-node');
        expect(entries.length).toEqual(4);
    });
    it('should fail', function () {
        component.jsonObject = null;
        expect(component).toThrowError();
    });
});
//# sourceMappingURL=ng-object-tree.component.spec.js.map