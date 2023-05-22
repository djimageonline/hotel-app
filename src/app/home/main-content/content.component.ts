import { Component, ElementRef, HostListener } from '@angular/core';
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

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    const target = event.target as HTMLElement; 
    const hotelId = target.dataset['id']
    console.log(hotelId)

     let targethotelObj = myhotelDetails.filter(function (hotel) {
      return hotel.id === Number(hotelId);
    })[0];
    console.log(targethotelObj);

  }


  



} 