import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'etech-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.scss']
})
export class VideoListItemComponent implements OnInit {
  @Input() video
  constructor() { }

  ngOnInit() {
  }

}
