import { TestBed } from '@angular/core/testing';

import { NgObjectTreeService } from './ng-object-tree.service';

describe('NgObjectTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgObjectTreeService = TestBed.get(NgObjectTreeService);
    expect(service).toBeTruthy();
  });
});
