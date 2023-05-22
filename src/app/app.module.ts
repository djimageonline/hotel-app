import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HeroComponent } from './home/hero/hero.component'
import { ContentComponent } from './home/main-content/content.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './home/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DateRangePickerForms } from "./home/main-content/date-picker/date-picker.component";
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ContentComponent,
    FooterComponent,
    DateRangePickerForms,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
