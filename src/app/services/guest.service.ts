import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest } from '../models/Guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
private apiUrl = 'https://localhost:7067/api/Guest';
  constructor(private http: HttpClient) { }

  register(guest: Guest) {
    return this.http.post(this.apiUrl + '/api/guest/register', guest);
  }

  getGuestReservations(guestId: number) {
    return this.http.get<any[]>(this.apiUrl + '/api/guest/GetCustomerReservations/' + guestId);
  }
  getGuestInfo(guestId: number) {
    return this.http.get<any[]>(this.apiUrl + '/api/guest/getGuestInfo/' + guestId);
  }
}
