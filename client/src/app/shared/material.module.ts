import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material'

export const materialModules = [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialogModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class MaterialModule { }
