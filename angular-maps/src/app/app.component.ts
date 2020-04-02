import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  latCasa: number = 45.5401546;
  lngCasa: number = 9.22993;
  lat: number = 45.506738;
  lng: number = 9.190766;

  latCane: number = 45.5401546;
  lngCane: number = 9.23010;

  latCuore: number = 45.5402500;
  lngCuore: number = 9.22993;

  latemoji: number = 45.5400000;
  lngemoji: number = 9.22993;

  colore="red";
  rosso(){
    this.colore="red";
  }
  giallo(){
    this.colore="yellow";
  }
  verde(){
    this.colore="green";
  }
  icon =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  cane=  {
    url:'./assets/img/cane.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  emoji =  {
    url:'./assets/img/emoji.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  cuore =  {
    url:'./assets/img/cuoreBianco.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
   triangle: Array<Point> =
  [
    {lng:9.190766, lat:45.506738},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]
    rectangle: Array<Point> =
  [
    {lng:9.190766, lat:45.6},
    {lng:9.7, lat:45.6},
    {lng:9.7, lat:45.4},
    {lng:9.190766, lat:45.4},
  ]

  coloreRet="red";
  rossoRet(){
    this.coloreRet="red";
  }
  gialloRet(){
    this.coloreRet="yellow";
  }
  verdeRet(){
    this.coloreRet="green";
  }

}

