import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/track.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{

  tracks: TrackModel[] = []

  constructor () { }

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.tracks = data;
  }

}
