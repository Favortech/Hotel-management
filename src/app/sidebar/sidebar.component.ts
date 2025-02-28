import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Guest } from '../models/Guest';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isShrink = false; // Controls the sidebar width
  submenus: { [key: string]: boolean } = {}; // Tracks the expanded state of submenus
  currentGuest!: Guest;

  // constructor(private _authenticationService: AuthenticationService, 
  //   //private toastrService: ToastrService, 
  //   private _router: Router) {
  //     this._authenticationService.currentGuest.subscribe(x => this.currentGuest = x);
  //    }

  // ngOnInit() {
  // }

  // logout() {
  //   this._authenticationService.logout();
  //   this._router.navigate(['/login']);
  // }

  toggleSidebar(): void {
    this.isShrink = !this.isShrink;
  }

  toggleSubmenu(key: string): void {
    this.submenus[key] = !this.submenus[key];
  }
}
