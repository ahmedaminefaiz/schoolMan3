import { Component } from '@angular/core';
import { Ser1Service } from './ser1.service';
import { Profile } from './Profile';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface Product {
  Name: string;
  Image: string;
  Price: number;
  Category: string;
  Reviews: number;
  Status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
click1: boolean;
sidebarVisible: boolean=true;
myclick() {
 this.title = 'amine';
}
  title="ahmed";
  date3: Date;
  products: Product[]; // Declare products as an array of Product
  product: Product;
    constructor() {
    this.click1=true;
    this.date3 = new Date();
    this.products = [
      {
        Name: "Product 1",
        Image: "image1.jpg",
        Price: 50.00,
        Category: "Electronics",
        Reviews: 3,
        Status: "Available"
      },
      {
        Name: "Product 2",
        Image: "image2.jpg",
        Price: 60.00,
        Category: "Clothing",
        Reviews: 4,
        Status: "Unvailable"
      }
    ];

    this.product ={
      Name: "Product 1",
      Image: "image1.jpg",
      Price: 50.00,
      Category: "Electronics",
      Reviews: 3,
      Status: "Available"
    }
  }
}
