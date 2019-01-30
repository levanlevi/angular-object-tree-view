import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgObjectTreeComponent } from './ng-object-tree.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';


@Component({
  selector: 'lib-test-component-wrapper',
  template: '<lib-ng-object-tree [style.display]="\'none\'" [jsonObject]="jsonObject"></lib-ng-object-tree>'
})
class TestComponentWrapperComponent {
  jsonObject = null;
}

describe('NgObjectTreeComponent', () => {
  let component: NgObjectTreeComponent;
  let fixture: ComponentFixture<TestComponentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgObjectTreeComponent, TestComponentWrapperComponent],
      imports: [CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // before each test
  });

  it('should create correct number of list items in HTML', () => {
    fixture = TestBed.createComponent(TestComponentWrapperComponent);
    fixture.componentInstance.jsonObject = {
      'test-key0': 'test-value0',
      'test-key1': 'test-value1',
      'test-key2': 'test-value2',
      'test-key3': 'test-value3'
    };
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
    const lis = fixture.nativeElement.querySelectorAll('.obj-entry-node');
    expect(lis.length).toEqual(4);
  });

  it('should create expandable', () => {
    fixture = TestBed.createComponent(TestComponentWrapperComponent);
    fixture.componentInstance.jsonObject = {
      triangle: { point: { x: 1, y: 1 } },
      name: 'trio'
    };
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
    const expandable = fixture.nativeElement.querySelector('.obj-entry-expandable');

    expect(expandable).toBeTruthy();
  });

  // TODO add expand click test

  it('should not fail on empty jsonObject', () => {
    fixture = TestBed.createComponent(TestComponentWrapperComponent);
    fixture.componentInstance.jsonObject = null;
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
