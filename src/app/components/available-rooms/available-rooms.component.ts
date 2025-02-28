import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-available-rooms',
  imports: [],
  templateUrl: './available-rooms.component.html',
  styleUrl: './available-rooms.component.scss'
})
export class AvailableRoomsComponent implements OnInit {
  availableRooms!: any[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAvailableRooms().subscribe((rooms: any[]) => {
      this.availableRooms = rooms;
    });
  }
}
