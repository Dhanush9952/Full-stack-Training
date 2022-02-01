import { Component,Injectable,OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import {MatTableModule} from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatSelectModule } from '@angular/material/select' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Test-1';
  currentItem = 'Television';


  products: Product[] = [];

  productService;

  constructor(){
    this.productService=new ProductService();
  }

  getProducts() {
    
    this.products=this.productService.getProducts();
  }

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

}



