import { NgModule } from '@angular/core';
import { NgObjectTreeComponent } from './ng-object-tree.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgObjectTreeComponent],
  imports: [
    CommonModule
  ],
  exports: [NgObjectTreeComponent]
})
export class NgObjectTreeModule { }
