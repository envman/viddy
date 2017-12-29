import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedGuard } from '@etech/shared'

import { CallbackComponent } from './callback/callback.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
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
