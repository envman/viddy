import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etech-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos = [
    {
      name: 'EcoHub Dashboard',
      date: Date.now(),
      views: 10000,
      uploader: 'Development',
      description: 'A video on the ecohub Dashboard'
    },
    {
      name: 'Btl Login Process',
      date: Date.now(),
      views: 100000,
      uploader: 'Development',
      description: 'Showing off the new Login Process'
    },
    {
      name: 'EcoHub Dashboard',
      date: Date.now(),
      views: 10000,
      uploader: 'Development',
      description: 'A video on the ecohub Dashboard'
    },
    {
      name: 'EcoHub Dashboard',
      date: Date.now(),
      views: 10000,
      uploader: 'Development',
      description: 'A video on the ecohub Dashboard'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
