import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { JSONModel } from './json-model';

@Component({
  selector: 'lib-ng-object-tree',
  templateUrl: 'ng-object-tree.component.html',
  styles: []
})
export class NgObjectTreeComponent implements OnChanges {

  // option to expand arrays horizontally
  @Input() jsonObject: any;
  entries: JSONModel[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);

    this.convertToJSONModel();
  }

  private convertToJSONModel(): any {
    if (Array.isArray(this.jsonObject)) {
      this.entries = this.jsonObject.map(j => ({ key: j, value: j, expanded: false, expandable: false }));
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
