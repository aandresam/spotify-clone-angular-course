import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{
  mockCover: TrackModel = {
    cover: 'https://static.qobuz.com/images/covers/1a/y7/oyuuug2duy71a_50.jpg',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    duration: 0,
    url: '',
    _id: ''
  }
  constructor () { }

  ngOnInit(): void {

  }

}
