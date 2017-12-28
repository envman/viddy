import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedGuard } from '@etech/shared'

import { CallbackComponent } from './callback/callback.component'
import { LoginComponent } from './login/login.component'
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthenticatedGuard],
    canActivateChild: [AuthenticatedGuard]
  },
  { path: 'callback', component: CallbackComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
