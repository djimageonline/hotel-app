import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HeroComponent } from './home/hero/hero.component'
import { ContentComponent } from './home/main-content/content.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
