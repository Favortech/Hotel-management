import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { RoomCategoryService } from '../../services/room-category.service';
import { RoomCategory } from '../../models/roomCategory';

@Component({
  selector: 'app-create-room-category',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './create-room-category.component.html',
  styleUrls: ['./create-room-category.component.scss'],
})
export class CreateRoomCategoryComponent implements OnInit {
  files: File[] = [];
  features!: FormArray;
  featuresList: { featureName: string }[] = [];
  showAlert = false;

 
  roomCategories!: RoomCategory[];
  roomcategoryForm: FormGroup;

  constructor(
    private elementRef: ElementRef,
    private roomCategoryService: RoomCategoryService
  ) {
    this.roomcategoryForm = new FormGroup({
      image: new FormControl(''),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      featureName: new FormControl('', Validators.required),
      features: new FormArray([]), // Initialize the features as a FormArray
    });
    // this.features = this.roomcategoryForm.get('features') as FormArray;
  }
  ngOnInit(): void {

  }

  
  


  onCreate(): void {
    if (this.roomcategoryForm.valid) {
      console.log(this.roomcategoryForm.value);
      this.roomCategoryService
        .addRoomCategory(this.roomcategoryForm.value)
        .subscribe(
          (res) => {
            console.log(res);
            alert('Room Category Created');
          },
          (error) => {
            console.error('Error creating room category:', error);
          }
        );
    } else {
      alert('Please fill all required fields.');
    }
  }

  addFeature(): void {
    const featureName = this.roomcategoryForm.get('name')?.value; // Get the feature name

    if (featureName) {
      // Add to the FormArray
      this.features.push({ featureName: name});
      if (featureName) {
        // Add to amenitiesList for table display
        this.featuresList.push({ featureName: featureName });

        // Add to the FormArray (if needed for submission)
        this.features = this.roomcategoryForm.get('features') as FormArray;
        this.features.push(
          new FormGroup({
            name: new FormControl(featureName),
          })
        );
        // Reset input field
        this.roomcategoryForm.get('name')?.reset();
      } else {
        alert('Please enter a feature name');
      }
    }
  }

  removeFeature(index: number): void {
    // Remove from the FormArray
    this.featuresList.splice(index,1);
     // Also remove from the FormArray
     const features = this.roomcategoryForm.get('features') as FormArray;
     features.removeAt(index);
  }

  addMoreFiles() {
    const input = this.elementRef.nativeElement.querySelector('#imageInput');
    input.click();
  }

  handleFileChange(event: any) {
    const selectedFiles = event.target.files;
    for (const file of selectedFiles) {
      this.files.push(file);
    }
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
