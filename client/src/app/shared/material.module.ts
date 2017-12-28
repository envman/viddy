import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule
  MatInputModule,
  MatDialogModule
} from '@angular/material'

export const materialModules = [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class MaterialModule { }
