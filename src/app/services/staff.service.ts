import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'https://localhost:7067/api/Staff';

  constructor(private http:HttpClient  ){}

  getStaffInfo(id:number){
    let options = {};
    return this.http.get(`${this.apiUrl}/${id}`,options);
   }
  getStaffs(): any {
    return this.http.get(this.apiUrl);
  }
}
