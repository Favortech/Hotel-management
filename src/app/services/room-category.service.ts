import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomCategoryService {
  private RoomCategoryApiUrl = 'https://localhost:7067/api/RoomCategory';
  constructor(private http : HttpClient) { };
  addRoomCategory(roomCategory: any){
    let options = {};
    return this.http.post(this.RoomCategoryApiUrl, roomCategory,options)
   }
     // updateRoomCategory(id: number, roomCategory: RoomCategory): Observable<RoomCategory> {
  //   return this.http.put<RoomCategory>(`${this.apiUrl}/${id}`, roomCategory);
  // }

  // // Method to delete a room category
  // deleteRoomCategory(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
