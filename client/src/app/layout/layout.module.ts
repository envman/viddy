import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '@etech/shared'

import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
