import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-dialog-box',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './room-dialog-box.component.html',
  styleUrl: './room-dialog-box.component.scss'
})
export class RoomDialogBoxComponent implements OnInit {
  @Input() roomData: Room | null = null;
  roomForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private roomService: RoomService
  ) {
    this.roomForm = this.fb.group({
      roomNumber: ['', Validators.required],
      category: ['', Validators.required],
      roomFloor: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      isAvailable: ['Available', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      amenities: this.fb.array([]), // If you have amenities, initialize here
    });
  }

  ngOnInit(): void {
    if (this.roomData) {
      this.roomForm.patchValue(this.roomData);
    }
  }

  onSubmit(): void {
    if (this.roomForm.valid) {
      const room: Room = { ...this.roomForm.value, id: this.roomData ? this.roomData.id : Math.floor(Math.random() * 1000) };
      if (this.roomData) {
        this.roomService.updateRoom(room).subscribe(() => this.activeModal.close());
      } else {
        this.roomService.createRoom(room).subscribe(() => this.activeModal.close());
      }
    }
  }
}