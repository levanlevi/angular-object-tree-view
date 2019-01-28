import { OnChanges, SimpleChanges } from '@angular/core';
import { JSONModel } from './json-model';
export declare class NgObjectTreeComponent implements OnChanges {
    jsonObject: any;
    entries: JSONModel[];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    private convertToJSONModel;
    expandClick(entry: JSONModel): void;
}
