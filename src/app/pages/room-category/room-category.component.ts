import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-category',
  imports: [RouterModule,RouterLink],
  templateUrl: './room-category.component.html',
  styleUrl: './room-category.component.scss'
})
export class RoomCategoryComponent {
roomCategories: any;

}
