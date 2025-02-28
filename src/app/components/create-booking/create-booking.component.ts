import { Component } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  imports: [],
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.scss'
})
export class CreateBookingComponent {
  items!: [
    '1 night',
    '2 night'
  ];
}
