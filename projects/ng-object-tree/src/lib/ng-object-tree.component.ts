import { Component, OnInit, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { JSONModel } from './json-model';

@Component({
  selector: 'lib-ng-object-tree',
  templateUrl: 'ng-object-tree.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgObjectTreeComponent implements OnChanges {

  // Feature: option to expand arrays horizontally
  // Feature: show icon?
  @Input() jsonObject: any;
  private entries: JSONModel[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.jsonObject) {
      this.convertToJSONModel();
    }
  }

  private convertToJSONModel(): any {
    if (Array.isArray(this.jsonObject)) {
      this.entries = this.jsonObject.map(j => ({ key: undefined, value: j, expanded: false, expandable: false }));
    } else {
      const arr = Object.entries(this.jsonObject);

      arr.forEach((val, i) => {
        const entry: JSONModel = {
          key: val[0],
          expanded: false
        };

        if (typeof (val[1]) === 'string') {
          entry.value = val[1];
          entry.expandable = false;
        } else {
          entry.value = val[1];
          entry.expandable = true;
        }

        this.entries.push(entry);
      });
    }
  }

  expandClick(entry: JSONModel) {
    entry.expanded = !entry.expanded;
  }
}
