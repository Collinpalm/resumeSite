import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'new personal email', cols: 1, rows: 1},
    {text: 'collinpalm@knights.ucf.edu', cols: 1, rows: 1},
  ];
}
