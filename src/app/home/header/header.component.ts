import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'hotel-header',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {

  faBars = faBars;
  isHamdisplayed = false;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  handleMenuClick(event: Event): void {
    const target = event.target as HTMLElement; 
    console.log("icon clicked", target)
    this.showNav()
  }

  showNav() :void {
    console.log("test nav")
    const element = this.elementRef.nativeElement.querySelector('#links');

    if (this.isHamdisplayed) {
      this.renderer.setStyle(element, 'display', 'none');
    } else {
      this.renderer.setStyle(element, 'display', 'block');
    }
    this.isHamdisplayed = !this.isHamdisplayed;
  }


}