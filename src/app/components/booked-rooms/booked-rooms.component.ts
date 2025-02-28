import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-booked-rooms',
  imports: [],
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.scss'
})
export class BookedRoomsComponent {
  bookedRooms!: any[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getBookedRooms().subscribe((rooms: any[]) => {
      this.bookedRooms = rooms;
    });
  }
}
