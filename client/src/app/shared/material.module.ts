import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatProgressSpinnerModule} from '@angular/material'


export const materialModules = [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule
]
@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class MaterialModule { }
