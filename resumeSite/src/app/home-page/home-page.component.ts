import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: '#FFC107'},
    {text: 'Two', cols: 1, rows: 1, color: '#FFB300'},
    {text: 'Three', cols: 1, rows: 1, color: '#FFC107'},
    {text: 'Four', cols: 1, rows: 1, color: '#FFB300'},
  ];

}
