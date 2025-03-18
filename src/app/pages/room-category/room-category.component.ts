import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CreateRoomCategoryComponent } from "../../components/create-room-category/create-room-category.component";
import { RoomCategory } from '../../models/roomCategory';
import { RoomCategoryService } from '../../services/room-category.service';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteDialogBoxComponent } from '../../Modal/delete-dialog-box/delete-dialog-box.component';

@Component({
  selector: 'app-room-category',
  imports: [RouterModule, CreateRoomCategoryComponent,NgbModalModule,NgbModule],
  templateUrl: './room-category.component.html',
  styleUrl: './room-category.component.scss'
})
export class RoomCategoryComponent {

  roomCategories: any;

constructor(private roomCategoryService: RoomCategoryService, private modalService: NgbModal){}

ngOnInit(): void {
  this.loadRoomCategories();
}

 loadRoomCategories(): void {
    this.roomCategoryService.getRoomCategories().subscribe((roomCategories: any[]) => {
      this.roomCategories = roomCategories;
    });
  }

  deleteRoomCategory(id : number): void {
    this.roomCategoryService.deleteRoomCategory(this.roomCategories.id).subscribe(() => {
      this.loadRoomCategories(); // Reload rooms after deletion
      window.alert('Room Category Deleted') // Close the delete confirmation modal
    }, (error: any) => {
      console.error('Error deleting room:', error);
    });
  }

  openRoomDialog() {
    this.modalService.open(CreateRoomCategoryComponent);
    }
    openDeleteDialog(){
      this.modalService.open(DeleteDialogBoxComponent);
    }
}
