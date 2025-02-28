import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // apiUrl = 'https://localhost:7067/api/Login';
  // private currentGuestSubject: BehaviorSubject<any>;
  // public currentGuest: Observable<any>;

  // constructor(private _http: HttpClient) {
  //   this.currentGuestSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('guest') ?? ''));
  //   this.currentGuest = this.currentGuestSubject.asObservable();
  // }

  // public get currentGuestValue() {
  //   return this.currentGuestSubject.value;
  // }

  // login(emailAddress: string, password: string) {
  //   return this._http.post<any>(this.apiUrl + '/api/customer/Authenticate', { emailAddress, password })
  //     .pipe(map(customer => {

  //       if (customer && customer.token) {
  //           // store customer details and jwt token in local storage to keep user logged in between page refreshes
  //           localStorage.setItem('customer', JSON.stringify(customer));
  //           this.currentGuestSubject.next(customer);
  //       }
     
  //       return customer;
  //     }));
  // }

  // logout() {
  //   // remove user from local storage and set current customer to null
  //   localStorage.clear();
  //   localStorage.removeItem('reservation');
  //   localStorage.removeItem('attr');
  //   localStorage.removeItem('field');
  //   this.currentGuestSubject.next(null);
  // }
}
