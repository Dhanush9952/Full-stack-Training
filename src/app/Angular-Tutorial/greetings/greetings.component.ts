import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {


  //Input and Outputs:
  @Input() name! : string;
  @Output() SendMessage = new EventEmitter<string>();
  
  
  constructor() { }

  ngOnInit(): void {
  }

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}
