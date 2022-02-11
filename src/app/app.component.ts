import { Component,Injectable,OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { TimeService } from './Angular-Tutorial/time.service';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService],
})


export class AppComponent implements OnInit{
  title = 'Training';
  currentItem = 'Television';


  products: Product[] = [];

  // productService;

  // constructor(){
  //   this.productService=new ProductService();
  // }

  // getProducts() {
    
  //   this.products=this.productService.getProducts();
  // }

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  //Event Handling - Click Event
  clickexample(){
    alert("Hello");
  }
  //Event Handling - Key Event
  tracker = 0;
  keyexmaple(event: { key: any; }){
    let key = event.key;
    this.tracker++;
    if(this.tracker >= 5)
    alert(key);
  }
  insert = "King";
  onInfoReceived(event: { price: any; brand: any; }) {
    let price = event.price;
    let brand = event.brand;
    alert(`Price: ${price}, Brand: ${brand}`);
  }

  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  sum: number = 0;
  constructor(private http: HttpClient, private timeService: TimeService, acc1:AccountService){ 
    this.sum = acc1.add(1,2,3,4);
   }

 
  users: any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
  
}




 