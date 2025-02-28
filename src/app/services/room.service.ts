import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/room';



@Injectable({
  providedIn: 'root',
})
export class RoomService {




  private apiUrl = 'https://localhost:7067/api/Room';
  private apiUrl2 = 'https://localhost:7067/api/RoomCategory';
  amenities: any;

  constructor(private http: HttpClient) { }
 

   createRoom(room: any) {
    let options = {};
    return this.http.post(this.apiUrl, room,options)
  
  }
  // createRoom(roomData: FormData){
  //   return this.http.post(this.apiUrl, roomData);
  // }
  getRooms(): any {
    return this.http.get(this.apiUrl);
  }
  getAvailableRooms(): any {
    return this.http.get(`${this.apiUrl}/available`);
  }

  getBookedRooms(): any {
    return this.http.get(`${this.apiUrl}/booked`);
  }

  getRoom(id:number){
    let options = {};
    return this.http.get(`${this.apiUrl}/${id}`,options);
   }

   getRoomCategories(): any {
    return this.http.get(this.apiUrl2)
  }
  // editRoom(id: number, room: any) {
  //   return this.http.put(`${this.apiUrl}/${room.id}`, room);
  // }
  
  // deleteRoom(id: number){
  //   return this.http.delete(`${this.apiUrl}/rooms/${id}`);
  // }
 
  updateRoom(room: Room): any {
    return this.http.put(`${this.apiUrl}/${room.id}`, room);
  }

  // Method to delete a room
  deleteRoom(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // getRoomCategories(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl2); // Specify return type here
  // }
  

  getAmenities(): any {
    return this.http.get('https://localhost:7067/api/Amenity');
  }
}












// getRooms(): Observable<Room[]> {
//   return this.http.get<Room[]>(`${this.apiUrl}/rooms`);
// }

// getAvailableRooms(): Observable<Room[]> {
//   return this.http.get<Room[]>(`${this.apiUrl}/rooms/available`);
// }

// getBookedRooms(): Observable<Room[]> {
//   return this.http.get<Room[]>(`${this.apiUrl}/rooms/booked`);
// }

