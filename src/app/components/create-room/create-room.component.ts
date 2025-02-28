




import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoomService } from '../../services/room.service'; // Adjust the path as necessary
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
})
export class CreateRoomComponent implements OnInit {
  // roomForm: FormGroup;
  // amenitiesList: { AmenityName: string; AmenityQuantity: number }[] = [];
  // roomCategories: Room[] = []; // Replace with your actual category type

  // constructor(
  //   private fb: FormBuilder,
  //   private roomService: RoomService,
  //   private router: Router
  // ) {
  //   this.roomForm = this.fb.group({
  //     image: [null],
  //     roomNumber: ['', Validators.required],
  //     category: ['', Validators.required],
  //     roomFloor: ['', Validators.required],
  //     capacity: ['', [Validators.required, Validators.min(1)]],
  //     isAvailable: ['Available', Validators.required], // Default to Available
  //     price: ['', [Validators.required, Validators.min(0)]],
  //     description: ['', Validators.required],
  //     name: [''],
  //     quantity: [1, Validators.min(1)], // Default quantity
  //   });
  // }

  // ngOnInit(): void {
  //   this.loadRoomCategories(); // Load room categories from your service
  // }

  // loadRoomCategories(): void {
  //   // Fetch room categories from your service
  //   // this.roomService.getRoomCategories().subscribe(categories => {
  //   //   this.roomCategories = categories;
  //   // });
  // }

  // handleFileChange(event: any): void {
  //   const files = event.target.files;
  //   const gallery = document.getElementById('gallery');
    
  //   if (gallery) {
  //     gallery.innerHTML = ''; // Clear the gallery
  //     for (let i = 0; i < files.length; i++) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         const img = document.createElement('img');
  //         img.src = e.target?.result as string;
  //         img.style.width = '100px'; // Adjust size as needed
  //         img.style.margin = '5px';
  //         gallery?.appendChild(img);
  //       };
  //       reader.readAsDataURL(files[i]);
  //     }
  //   }
  // }

  // addAmenity(): void {
  //   const name = this.roomForm.get('name')?.value;
  //   const quantity = this.roomForm.get('quantity')?.value;

  //   if (name && quantity) {
  //     this.amenitiesList.push({ AmenityName: name, AmenityQuantity: quantity });
  //     this.roomForm.patchValue({ name: '', quantity: 1 }); // Reset inputs
  //   }
  // }

  // removeAmenity(index: number): void {
  //   this.amenitiesList.splice(index, 1);
  // }

  // async onCreate(): Promise<void> {
  //   if (this.roomForm.valid) {
  //     const roomData = {
  //       ...this.roomForm.value,
  //       amenities: this.amenitiesList,
  //     };

  //     // Call your service to create the room
  //     try {
  //       await this.roomService.createRoom(roomData);
  //       this.router.navigate(['/rooms']); // Redirect to the room list or any other page
  //     } catch (error) {
  //       console.error('Error creating room:', error);
  //     }
  //   }
  // }
  files: File[] = [];
  amenities!: FormArray;
  showAlert = false;
  amenitiesList: { AmenityName: string; AmenityQuantity: number }[] = [];
  roomForm = new FormGroup({
    image: new FormControl(''),
    roomNumber: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    roomFloor: new FormControl('', Validators.required),
    capacity: new FormControl(0, [Validators.required, Validators.min(1)]),
    isAvailable: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(100)]),
    description: new FormControl('', Validators.required),
  
    name: new FormControl(''),
    quantity: new FormControl(0),
    amenities: new FormArray([]),
  });
  categories: any;
  


  constructor(
    private roomService: RoomService,
    private elementRef: ElementRef,
    private router:Router
  ) {}

//   loadRoomCategories(): void {
//     this.roomService.getRoomCategories().subscribe((categories: RoomCategory[]) => {
//         this.roomCategories = categories; // This should now contain objects with id and categoryName
//         console.log(categories);
//     });
// }
ngOnInit(): void {
  this.loadRoomCategories();
}

loadRoomCategories(): void {
  this.roomService.getRoomCategories().subscribe((categories: any) => {
    this.categories = categories;

  });
}

  onCreate(): void {
  //   if (this.roomForm.valid) {
  //     const selectedCategoryId = this.roomForm.get('category')?.value;
  //     const selectedCategory = this.roomCategories.find(cat => cat.id === selectedCategoryId);
      
  //     const roomData = {
  //         ...this.roomForm.value,
  //         categoryName: selectedCategory?.categoryName, // Add category name if needed
  //         amenities: this.amenitiesList,
  //     };

  //     // Call your service to create the room
  //     try {
  //        this.roomService.createRoom(roomData);
  //         this.router.navigate(['/rooms']); // Redirect to the room list or any other page
  //     } catch (error) {
  //         console.error('Error creating room:', error);
  //     }
  // }

    if (this.roomForm.valid) {
      console.log(this.roomForm.value);
    //   this.roomService.createRoom({
    //     name: this.roomName,
    //     roomCategoryId: this.selectedRoomCategoryId // This should be the ID
    // }).subscribe(response => {
    //     // Handle the response
    //});
      this.roomService.createRoom(this.roomForm.value).subscribe((res) => {
        console.log(res);
        alert('Room Created Succesfully ');
        this.router.navigate(['/room']);
      }, (error) => {
        console.error('Error creating room:', error);
      });
    } else {
      alert('Please fill all required fields.');
    }
  }

  
  // }
  // onCreate(): void {
  //   console.log(this.roomForm.value);
  //   this.roomService.createRoom(this.roomForm.value).subscribe((res) => {
  //     console.log(res);
  //     // this.showAlert = true;
  //     // setTimeout(() => {
  //     //   this.showAlert = false;
  //     // }, 3000);
  //     alert('Room Created');
  //   });
  // }

  addAmenity(): void {
    const name = this.roomForm.get('name')?.value;
    const quantity = this.roomForm.get('quantity')?.value;

    if (name && quantity) {
      // Add to amenitiesList for table display
      this.amenitiesList.push({ AmenityName: name, AmenityQuantity: quantity });

      // Add to the FormArray (if needed for submission)
      this.amenities = this.roomForm.get('amenities') as FormArray;
      this.amenities.push(
        new FormGroup({
          name: new FormControl(name),
          quantity: new FormControl(quantity),
        })
      );

      // Reset input fields
      this.roomForm.get('name')?.reset();
      this.roomForm.get('quantity')?.reset();
    } else {
      alert('Please enter both an amenity name and quantity.');
    }
  }

  removeAmenity(index: number): void {
    // Remove from amenitiesList for display
    this.amenitiesList.splice(index, 1);

    // Also remove from the FormArray
    const amenities = this.roomForm.get('amenities') as FormArray;
    amenities.removeAt(index);
  }

  handleFileChange(event: any) {
    const selectedFiles = event.target.files;
    for (const file of selectedFiles) {
      this.files.push(file);
    }
    const input = this.elementRef.nativeElement.querySelector('#imageInput');
    input.click();
    this.displayFiles();
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

}
