import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component'
import { VideosComponent } from '../videos/videos.component'


const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'videos', loadChildren: '../videos/videos.module#VideosModule'}
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
