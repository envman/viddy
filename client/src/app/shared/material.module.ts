import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatDialogModule,
  MatGridListModule,
  MatCardModule
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
  MatMenuModule,
  MatGridListModule,
  MatCardModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class MaterialModule { }
