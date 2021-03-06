import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, NumberTruncatePipe } from '@etech/shared'

import { VideosComponent } from './videos.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideosRoutingModule } from './videos-routing.module'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VideosRoutingModule
  ],
  declarations: [VideosComponent, VideoListItemComponent, NumberTruncatePipe]
})
export class VideosModule { }
