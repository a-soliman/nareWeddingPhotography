import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //zoom level
  zoom: number = 8;

  //start Position
  lat: number = 33.7866;
  lng: number = -118.2987;

}
