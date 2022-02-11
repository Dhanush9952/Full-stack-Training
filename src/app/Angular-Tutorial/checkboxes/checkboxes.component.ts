import { Component, OnInit, Inject } from '@angular/core';

interface Movie {
  name: string;
  selected: boolean;
  disabled: boolean;
  movieCollection?: Movie[];
}
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})




export class CheckboxesComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {
  }

  
  movies: Movie = {
    name: 'Dynamic Movie List',
    selected: false,
    disabled: false,
    movieCollection: [
      { name: 'Black Panther', selected: false, disabled: false },
      { name: 'Avengers: Endgame', selected: false, disabled: false },
      { name: 'Mission: Impossible - Fallout', selected: false, disabled: false },
      { name: 'Spider-Man: Into the Spider-Verse', selected: false, disabled: false },
      { name: 'Mad Max: Fury Road', selected: false, disabled: false },
      { name: 'Wonder Woman', selected: false, disabled: false }
    ]
};
foods: Food[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'},
];

selected = 'option2';

states: string[] = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

}



