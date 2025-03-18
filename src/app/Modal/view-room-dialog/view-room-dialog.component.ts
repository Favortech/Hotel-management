import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from '../../models/room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-room-dialog',
  imports: [CommonModule],
  templateUrl: './view-room-dialog.component.html',
  styleUrl: './view-room-dialog.component.scss'
})
export class ViewRoomDialogComponent implements OnInit {
  @Input() roomData: Room | null = null;

  constructor(public activeModal: NgbActiveModal) {}


  ngOnInit(): void {
  }

}
