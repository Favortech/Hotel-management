import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-delete-dialog-box',
  imports: [],
  templateUrl: './delete-dialog-box.component.html',
  styleUrl: './delete-dialog-box.component.scss'
})
export class DeleteDialogBoxComponent {
  @Input() roomData: Room | null = null;

  constructor(public activeModal: NgbActiveModal, private roomService: RoomService) {}

  confirmDelete(): void {
    if (this.roomData) {
      this.roomService.deleteRoom(this.roomData.id).subscribe(() => {
        this.activeModal.close('deleted'); // Close modal with result
      });
    }
  }
}
