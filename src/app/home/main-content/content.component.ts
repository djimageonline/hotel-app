import { Component, ElementRef, HostListener, Input, Output, } from '@angular/core';
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
  hotelPrice: number = 0

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    const target = event.target as HTMLElement; 

    if(target.dataset['id'] ){
      const hotelId = target.dataset['id']
      console.log("Hotel Card ID: ",hotelId)
  
      let targethotelObj = myhotelDetails.filter(function (hotel) {
        return hotel.id === Number(hotelId);
      })[0];
      
      if(hotelId){
        console.log("Hotel Price: ",targethotelObj.price);
        
        this.hotelPrice = targethotelObj.price;

        console.log(this.hotelPrice)
      }
    }
  }
}