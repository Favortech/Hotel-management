import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../models/Guest';


@Component({
  selector: 'app-booking',
  imports: [FormsModule,RouterModule,RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  guest: Guest;
  reservations: any[] = [];

  constructor(private guestService: GuestService, private router: Router) {
    this.guest = JSON.parse(localStorage.getItem('guest') ?? '');
  }

  ngOnInit() {
    this.getGuestInfo();
  }

  getGuestInfo() {
    this.guestService.getGuestInfo(this.guest.guestId).subscribe(
      (reservations) => {
        this.reservations = reservations;
      }
    )
  }

  redirectToCalendar(reservation: any) {
    let data = {
      id: reservation.id,
      startProgram: reservation.startProgram,
      endProgram: reservation.endProgram,
      start: reservation.start,
      end: reservation.end
    };

    console.log("redirect to calendar: " + JSON.stringify(reservation));
    localStorage.setItem('attr', JSON.stringify(data))
    this.router.navigate(['/my-reservations/field/' + reservation.path + "/reservation/" + reservation.id]);
  }

}
