import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
const COMPONENT = [
  NzLayoutModule,
  NzButtonModule,
  NzInputModule,
  NzSelectModule,
  NzDrawerModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    COMPONENT
  ],
  exports:[COMPONENT]
})
export class AntModule { }
