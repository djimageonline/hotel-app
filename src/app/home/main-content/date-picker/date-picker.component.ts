import { Component, Output, EventEmitter } from '@angular/core';


  @Component({
    selector: 'date-range-picker-forms',
    templateUrl: 'date-picker.component.html',
    styleUrls: ['date-picker.component.css']
  })

  export class DateRangePickerForms {

    @Output() totalDays: number | undefined
    
    startDate: string = '';
    endDate: string = '';
  
    handleStartDate(): void {
      console.log(this.startDate); 
      this.countDays() ;
    }
    handleEndDate(): void {
      console.log(this.endDate); 
      this.countDays() ; 
    }

    countDays(): void {
      if (this.startDate && this.endDate) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
         this.totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        console.log('Number of days:', this.totalDays);
      }
    }    
  }