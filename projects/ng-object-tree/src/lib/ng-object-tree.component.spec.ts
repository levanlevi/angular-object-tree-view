import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgObjectTreeComponent } from './ng-object-tree.component';
import { CommonModule } from '@angular/common';
import { NgObjectTreeModule } from 'ng-object-tree/public_api';

describe('NgObjectTreeComponent', () => {
  let component: NgObjectTreeComponent;
  let fixture: ComponentFixture<NgObjectTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgObjectTreeComponent],
      imports: [CommonModule, NgObjectTreeModule]
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
