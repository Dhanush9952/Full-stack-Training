import { Time } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimeService {
  currentDate!: Date;
currentTime!: Time;
  timeService: any;



  constructor() { }

  getTime(){

    return new Date();
  }
}
