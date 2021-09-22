import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { PiechartComponent } from '../piechart/piechart.component';

interface  ChartInterface {
  id: number;
  name: string;
  type: string;
}


@Component({
  selector: 'mikel-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})


export class GraficaComponent implements OnInit {




   public query:any = '';


   graficauno : any;

   json = [
     {id:1, name: "Chart 1", type: "Doughnut"},
     {"id":2,"name": "Chart 2", "type": "Bars"},
     {"id":3,"name": "Chart 3", "type": "Pay"},
     {"id":4,"name": "Chart 4", "type": "Points"},
     {"id":5,"name": "Chart 5", "type": "Lines"},
     {"id":6,"name": "Chart 6", "type": "Polygon"},
   ];



  constructor( ) {

  }

  ngOnInit(): void {

  }

}
