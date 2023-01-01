import { TrackModel } from '@core/models/tracks.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel;
  constructor() { }

  ngOnInit(): void {
  }

}
