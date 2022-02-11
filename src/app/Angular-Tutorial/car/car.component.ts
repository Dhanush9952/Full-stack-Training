import { Time } from '@angular/common';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  price!: number;
  @Input()
  brand!: string;
  @Output() sendPurchaseInfo = new EventEmitter<{price: number, brand: string}>();
  
  date: Date;

  constructor() {
    this.date = new Date();
   }

  ngOnInit(): void {
  }

  purchase(){
    this.sendPurchaseInfo.emit(
      {
        price: this.price,
        brand: this.brand
      }
    );
  }

  num!: boolean;
  num1!: boolean;
  server = 'Disabled';
  clicker ='Click below button to enable';
  clicker1 ='';

  get(event: Event){
    this.num = true;
    this.server = 'Enabled';
    this.clicker = '***Thank You!!!***';
  }
  get1(event: Event){
    this.num1 = true;
    this.clicker1 = 'Slider also enabled!'
  }

  selected = 'option2';

  
}
