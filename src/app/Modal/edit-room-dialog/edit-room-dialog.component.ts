import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-room-dialog',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './edit-room-dialog.component.html',
  styleUrl: './edit-room-dialog.component.scss'
})
export class EditRoomDialogComponent implements OnInit {
  room: Room = {
    id: 0,
    roomNumber: '',
    category: '',
    roomFloor: '',
    capacity: 0,
    isAvailable: '',
    price: 0,
    description: '',
    amenities: []
  };

  constructor(public activeModal: NgbActiveModal, private roomService: RoomService) { }

  ngOnInit(): void {
  }
  addAmenity(): void {
    const newAmenity = { name: '', quantity: 0 };
    this.room.amenities.push(newAmenity);
  }
  // editRoom(): void {
  //   this.roomService.updateRoom(this.room).subscribe((room: Room) => {
  //     this.activeModal.close(room);
  //   });
  // }
  updateRoom(): void {
    this.roomService.updateRoom(this.room).subscribe((response: any) => {
      console.log('Room updated successfully:', response);
      this.activeModal.close(this.room);
    });
  }
}
