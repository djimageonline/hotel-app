import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  template: `<hotel-header></hotel-header>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HotelR';
}
