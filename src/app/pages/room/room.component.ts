import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room';

@Component({
  selector: 'app-room',
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = []; // For search results
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;


  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
      this.filteredRooms = rooms; // Initialize filtered rooms
      this.filterRooms(); // Apply initial filter
    });
  }



  filterRooms(): void {
    if (this.searchTerm === '') {
      this.filteredRooms = [...this.rooms]; // Show all rooms if search term is empty
    } else {
      this.filteredRooms = this.rooms.filter(room =>
        room.roomNumber.includes(this.searchTerm.toLowerCase()) ||
        room.category.toString().includes(this.searchTerm.toLowerCase()) ||
        room.capacity.toString().includes(this.searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        room.isAvailable.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        room.id.toString().includes(this.searchTerm.toLowerCase()) ||
        room.roomFloor.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        room.price.toString().includes(this.searchTerm) // Assuming price is a number
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

  deleteRoom(id: number): void {
    if (confirm('Are you sure you want to delete this room?')) {
      this.roomService.deleteRoom(id).subscribe(() => {
        console.log('Room deleted');
        this.loadRooms(); // Reload rooms after deletion
      }, (error: any) => {
        console.error('Error deleting room:', error);
      });
    }
  }

  editRoom(roomId: number): void {
    this.router.navigate(['/edit-room', roomId]); // Navigate to edit component with room ID
  }

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
  }}