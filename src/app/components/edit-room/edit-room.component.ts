import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Amenity, Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-edit-room',
  imports: [CommonModule,FormsModule,RouterLink,RouterModule,ReactiveFormsModule],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.scss'
})
export class EditRoomComponent {
  getrooms:any = {};
  newItemName = '';
  newItemNumber = 0;
  items: any[] = [];
  room: Room = {
    id: 0,
    roomNumber: '',
    category: '0',
    roomFloor: '',
    capacity: 0,
    isAvailable:'',
    price: 0,
    description: '',
    amenities: []
  };
  amenities: Amenity = {
    name: '',
    quantity: 0
  };
//   showAlert = false;

//   createRoom() {
//     // Call API to create room
//     console.log('Room Edited successfully!');
//     window.alert('Room Edited successfully!');

//     this.showAlert = true;
//     setTimeout(() => {
//       this.showAlert = false;
//     }, 3000);
//   }


  files: File[] = [];

  roomId!: number;
selectedAmenities: any;
UpdateRoomForm =  new FormGroup({
    image: new FormControl(''),
    roomNumber: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    roomFloor: new FormControl('', Validators.required),
    capacity: new FormControl(0, [Validators.required, Validators.min(1)]),
    isAvailable: new FormControl(false),
    price: new FormControl(0, [Validators.required, Validators.min(100)]),
    description: new FormControl('', Validators.required),
  
    name: new FormControl(''),
    quantity: new FormControl(0),
    amenities: new FormArray([]),
  });
  roomCategories!: any[];




  constructor(private route: ActivatedRoute, private roomService: RoomService, private router: Router, private elementRef: ElementRef) {}
  handleFileChange(event: any) {
    const selectedFiles = event.target.files;
    for (const file of selectedFiles) {
      this.files.push(file);
    }
    this.displayFiles();
  }

  addMoreFiles() {
    const input = this.elementRef.nativeElement.querySelector('#imageInput');
    input.click();
  }

  displayFiles() {
    const gallery = this.elementRef.nativeElement.querySelector('#gallery');
    gallery.innerHTML = '';
    for (const file of this.files) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.width = 100;
        gallery.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }

  addItem() {
    this.items.push({
      name: this.newItemName,
      number: this.newItemNumber
    });
    this.newItemName = '';
    this.newItemNumber = 0;
  }

  // ngOnInit(): void {
  //   const navigation = this.router.getCurrentNavigation();
  //   if (navigation && navigation.extras.state && navigation.extras.state['room']) {
  //     this.room = navigation.extras.state['room']; // Get room data passed from the previous component
  //   } else {
  //     // Handle the case where no room data is passed
  //     console.error('No room data found');
  //   }
  // }

  // updateRoom(): void {
  //   if (this.room) {
  //     this.roomService.updateRoom(this.room.id, this.room).subscribe(() => {
  //       console.log('Room updated');
  //       this.router.navigate(['/room']); // Navigate back to the room management
  //     });
  //   }
  // }
  ngOnInit(): void {
    this.roomService.getRoomCategories().subscribe((categories: any[]) => {
      this.roomCategories = categories;
      console.log(categories);
    });
      const roomId = this.route.snapshot.paramMap.get('roomId');
      if (roomId) {
        this.roomService.getRoom(Number(roomId)).subscribe((response: any) => {
          this.room = response as Room;
          this.selectedAmenities = this.room.amenities;
        });
      }
  }
  // updateRoom(): void {
  //   this.roomService.updateRoom(this.room).subscribe(() => {
  //     console.log('Room updated');
  //     this.router.navigate(['/rooms']);
  //   }, (error: any) => {
  //     console.error('Error updating room:', error);
  //   });
  // }
  updateRoom(): void {
    this.room.amenities = this.selectedAmenities;
    this.roomService.updateRoom(this.room).subscribe(() => {
      console.log('Room updated');
      // Navigate back to the room list component
    }, (error: any) => {
      console.error('Error updating room:', error);
    });
  }
}