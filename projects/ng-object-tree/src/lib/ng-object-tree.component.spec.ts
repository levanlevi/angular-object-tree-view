import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgObjectTreeComponent } from './ng-object-tree.component';

describe('NgObjectTreeComponent', () => {
  let component: NgObjectTreeComponent;
  let fixture: ComponentFixture<NgObjectTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgObjectTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgObjectTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
