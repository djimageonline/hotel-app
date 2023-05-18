import { Component, Input, OnInit } from '@angular/core';
import { myhotelDetails } from './hotel.details'

@Component({
  selector: 'hotel-content',
  templateUrl: `./content.component.html`,
  styleUrls: ['./content.component.css'],

})
export class ContentComponent {
  title: string = "cool"
  hotelDetails =  myhotelDetails;
  
 

  
} 