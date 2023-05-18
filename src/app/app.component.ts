import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <hotel-hero></hotel-hero>
  <hotel-content ></hotel-content>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HotelR';
}
