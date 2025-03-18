



// import { HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';
// import { RoomService } from '../../services/room.service';
// import { Room } from '../../models/room';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-room',
  // imports: [FormsModule, RouterModule,CommonModule,ReactiveFormsModule, HttpClientModule],
  // templateUrl: './room.component.html',
//   styleUrls: ['./room.component.scss'],
// })
// export class RoomComponent implements OnInit {
//   rooms: Room[] = [];
//   filteredRooms: Room[] = []; // For search results
//   searchTerm: string = '';
//   currentPage: number = 1;
//   itemsPerPage: number = 5;
//   selectedRoom: Room = {
//     id: 0,
//     roomNumber: '',
//     category: '',
//     roomFloor: '',
//     capacity: 0,
//     isAvailable: '',
//     price: 0,
//     description: '',
//     amenities: []
//   };
//   editModalOpen = false;

//   constructor(private roomService: RoomService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadRooms();
//   }

//   loadRooms(): void {
//     this.roomService.getRooms().subscribe((rooms: Room[]) => {
//       this.rooms = rooms;
//       this.filteredRooms = rooms; // Initialize filtered rooms
//       this.filterRooms(); // Apply initial filter
//     });
//   }

//   openEditModal(room: Room): void {
//     this.selectedRoom = room;
//     this.editModalOpen = true;
//   }

//   closeEditModal(): void {
//     this.editModalOpen = false;
//   }

//   filterRooms(): void {
//     if (this.searchTerm === '') {
//       this.filteredRooms = [...this.rooms]; // Show all rooms if search term is empty
//     } else {
//       this.filteredRooms = this.rooms.filter(room =>
//         room.roomNumber.includes(this.searchTerm.toLowerCase()) ||
//         room.category.toString().includes(this.searchTerm.toLowerCase()) ||
//         room.capacity.toString().includes(this.searchTerm.toLowerCase()) ||
//         room.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//         room.isAvailable.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//         room.id.toString().includes(this.searchTerm.toLowerCase()) ||
//         room.roomFloor.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//         room.price.toString().includes(this.searchTerm) // Assuming price is a number
//       );
//     }
//     this.currentPage = 1; // Reset to the first page whenever the search term changes
//   }

//   paginate(rooms: Room[]): Room[] {
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     return rooms.slice(startIndex, startIndex + this.itemsPerPage);
//   }

//   nextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }

//   previousPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   get totalPages(): number {
//     return Math.ceil(this.filteredRooms.length / this.itemsPerPage);
//   }

//   deleteRoom(id: number): void {
//     if (confirm('Are you sure you want to delete this room?')) {
//       this.roomService.deleteRoom(id).subscribe(() => {
//         console.log('Room deleted');
//         this.loadRooms(); // Reload rooms after deletion
//       }, (error: any) => {
//         console.error('Error deleting room:', error);
//       });
//     }
//   }

//   editRoom(roomId: number): void {
//     this.router.navigate(['/edit-room', roomId]); // Navigate to edit component with room ID
//   }
//   updateRoom(): void {
//     this.room.amenities = this.selectedAmenities;
//     this.roomService.updateRoom(this.selectedRoom).subscribe(() => {
//       console.log('Room updated');
//       this.closeEditModal();
//       // Navigate back to the room list component
//     }, (error: any) => {
//       console.error('Error updating room:', error);
//     });
//   }
//   // updateRoom(roomId: number): void {
//   //   this.roomService.updateRoom(this.selectedRoom).subscribe(() => {
//   //     console.log('Room updated');
//   //     this.closeEditModal();
//   //   }, (error: any) => {
//   //     console.error('Error updating room:', error);
//   //   });
//   // }

//   getStatusClass(isAvailable: string): string {
//     switch (isAvailable) {
//       case 'Available':
//         return 'badge bg-success';
//       case 'Under Maintenance':
//         return 'badge bg-warning';
//       case 'Booked':
//         return 'badge bg-danger';
//       default:
//         return 'badge bg-secondary';
//     }
//   }}




import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoomComponent } from "../../components/create-room/create-room.component";
import { EditRoomComponent } from "../../components/edit-room/edit-room.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditRoomDialogComponent } from '../../Modal/edit-room-dialog/edit-room-dialog.component';
import { RoomDialogBoxComponent } from '../../Modal/room-dialog-box/room-dialog-box.component';
import { DeleteDialogBoxComponent } from '../../Modal/delete-dialog-box/delete-dialog-box.component';
import { ViewRoomDialogComponent } from '../../Modal/view-room-dialog/view-room-dialog.component';

@Component({
  selector: 'app-room',
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedRoom: Room = {
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
  // editModalOpen: boolean = false;
  // deleteModalOpen: boolean = false;
  // createModalOpen:boolean = false;

  constructor(private roomService: RoomService,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadRooms();
  }
  

  // initializeRoom(): Room {
  //   return {
  //     id: 0,
  //     roomNumber: '',
  //     category: '',
  //     roomFloor: '',
  //     capacity: 0,
  //     isAvailable: 'Available' ,
  //     price: 0,
  //     description: '',
  //     amenities: []
  //   };
  // }

  loadRooms(): void {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
      this.filteredRooms = rooms;
      this.filterRooms(); // Apply initial filter
    });
  }

  openCreateDialog(): void {
    const modalRef = this.modalService.open(RoomDialogBoxComponent);
    modalRef.result.then(() => {
      this.loadRooms();
    }).catch(() => {});
  }

  openEditDialog(room: Room): void {
    const modalRef = this.modalService.open(RoomDialogBoxComponent);
    modalRef.componentInstance.roomData = room; // Pass room data for editing
    modalRef.result.then(() => {
      this.loadRooms();
    }).catch(() => {});
  }

  openViewDialog(room: Room): void {
    const modalRef = this.modalService.open(ViewRoomDialogComponent);
    modalRef.componentInstance.roomData = room; // Pass room data for viewing
  }

  openDeleteRoomDialog(room: Room): void {
    const modalRef = this.modalService.open(DeleteDialogBoxComponent);
    modalRef.componentInstance.roomData = room; // Pass room data for deletion

    modalRef.result.then((result) => {
      if (result === 'deleted') {
        this.loadRooms(); // Reload rooms after deletion
      }
    }).catch(() => {}); // Handle dismiss
  }
  // openEditModal(room: Room): void {
  //   this.selectedRoom = { ...room }; // Clone the room object
  //   this.editModalOpen = true; // Open the modal
  // }
  // closeEditModal(): void {
  //   this.editModalOpen = false; // Close the modal
  // }
  // openCreateModal(): void { // Clone the room object
  //   this.createModalOpen = true; // Open the modal
  // }
  // closeCreateModal(): void {
  //   this.createModalOpen = false; // Close the modal
  // }

  // openDeleteModal(room: Room): void {
  //   this.selectedRoom = room; // Set the selected room for deletion
  //   this.deleteModalOpen = true; // Open the delete confirmation modal
  // }

  // closeDeleteModal(): void {
  //   this.deleteModalOpen = false; // Close the delete confirmation modal
  // }

  //  filterRoomsByAvailability(status: string): void {
  //       if (status === 'All') {
  //           this.filteredRooms = this.rooms;
  //       } else {
  //           this.roomService.getRoomsByAvailability(status).subscribe((filteredRooms: Room[]) => {
  //               this.filteredRooms = filteredRooms;
  //           });
  //       }
  //   }

  filterRooms(): void {
    if (this.searchTerm === '') {
      this.filteredRooms = [...this.rooms]; // Show all rooms if search term is empty
    } else {
      this.filteredRooms = this.rooms.filter(room =>
        room.roomNumber.includes(this.searchTerm) ||
        room.category.includes(this.searchTerm) ||
        room.capacity.toString().includes(this.searchTerm) ||
        room.description.includes(this.searchTerm) ||
        // this one is not functioning 
       // room.isAvailable.includes(this.searchTerm) ||
        room.id.toString().includes(this.searchTerm) ||
        room.roomFloor.includes(this.searchTerm) ||
        room.price.toString().includes(this.searchTerm)
      );
    }
    this.currentPage = 1; // Reset to the first page whenever the search term changes
  }

  paginate(rooms: Room[]): Room[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return rooms.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredRooms.length / this.itemsPerPage);
  }
  deleteRoom(room:Room): void {
    this.roomService.deleteRoom(room.id).subscribe(() => {
      this.loadRooms(); // Reload rooms after deletion
       // Close the delete confirmation modal
    }, (error: any) => {
      console.error('Error deleting room:', error);
    });
  }

  updateRoom(): void {
    this.roomService.updateRoom(this.selectedRoom).subscribe(() => {
      console.log('Room updated');
      
      this.loadRooms(); // Reload rooms after updating
      
    }, (error: any) => {
      console.error('Error updating room:', error);
    });
  }

  // deleteRoom(id: number): void {
  //   if (confirm('Are you sure you want to delete this room?')) {
  //     this.roomService.deleteRoom(id).subscribe(() => {
  //       this.loadRooms(); // Reload rooms after deletion
  //     }, (error: any) => {
  //       console.error('Error deleting room:', error);
  //     });
  //   }
  // }

  // updateRoom(): void {
  //   this.roomService.updateRoom(this.selectedRoom).subscribe(() => {
  //     console.log('Room updated');
  //     this.closeEditModal();
  //     this.loadRooms(); // Reload rooms after updating
  //   }, (error: any) => {
  //     console.error('Error updating room:', error);
  //   });
  // }

  getStatusClass(isAvailable: string): string {
    switch (isAvailable) {
      case 'Available':
        return 'badge bg-success';
      case 'Under Maintenance':
        return 'badge bg-warning';
      case 'Booked':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}