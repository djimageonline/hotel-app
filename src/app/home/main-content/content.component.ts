import { Component, Input, OnInit } from '@angular/core';
import { myhotelDetails } from './hotel.details'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'hotel-content',
  templateUrl: `./content.component.html`,
  styleUrls: ['./content.component.css'],

})
export class ContentComponent {
  title: string = "cool"
  hotelDetails =  myhotelDetails;
  faUtensils = faUtensils;
  faFish = faFish;
  faDumbbell = faDumbbell;
} 