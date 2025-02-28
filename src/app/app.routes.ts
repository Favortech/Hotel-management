import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      );
    },
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  // { path: 'field/:pathURL', component: CalendarComponent },
  // { path: 'field/:pathURL/reservation/:id', component: ReservationDetailComponent },
  // { path: 'payment', component: PaymentComponent, canActivate: [AuthGuardService]},
  // { path: 'my-reservations', component: MyReservationsComponent, canActivate: [AuthGuardService]},
  // { path: 'my-reservations/field/:pathURL/reservation/:id', component: ReservationDetailComponent, canActivate: [AuthGuardService]}

  {
    path: 'dashboard',
    loadComponent: () => {
      return import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
  {
    path: 'room',
    loadComponent: () => {
      return import('./pages/room/room.component').then((m) => m.RoomComponent);
    },
  },
  {
    path: 'room-category',
    loadComponent: () => {
      return import('./pages/room-category/room-category.component').then(
        (m) => m.RoomCategoryComponent
      );
    },
  },
  {
    path: 'create-room-category',
    loadComponent: () => {
      return import(
        './components/create-room-category/create-room-category.component'
      ).then((m) => m.CreateRoomCategoryComponent);
    },
  },
 
  {
    path: 'edit-room-category',
    loadComponent: () => {
      return import(
        './components/edit-room-category/edit-room-category.component'
      ).then((m) => m.EditRoomCategoryComponent);
    },
  },
 
  
  {
    path: 'create-room',
    loadComponent: () => {
      return import('./components/create-room/create-room.component').then(
        (m) => m.CreateRoomComponent
      );
    },
  },
  {
    path: 'edit-room/:roomId',
    loadComponent: () => {
      return import('./components/edit-room/edit-room.component').then(
        (m) => m.EditRoomComponent
      );
    },
  },
  {
    path: 'staff',
    loadComponent: () => {
      return import('./pages/staff/staff.component').then(
        (m) => m.StaffComponent
      );
    },
  },
  {
    path: 'create-staff',
    loadComponent: () => {
      return import('./components/create-staff/create-staff.component').then(
        (m) => m.CreateStaffComponent
      );
    },
  },
  {
    path: 'guest',
    loadComponent: () => {
      return import('./components/guest/guest.component').then(
        (m) => m.GuestComponent
      );
    },
  },
  {
    path: 'booking',
    loadComponent: () => {
      return import('./components/booking/booking.component').then(
        (m) => m.BookingComponent
      );
    },
  },
  {
    path: 'create-booking',
    loadComponent: () => {
      return import('./components/create-booking/create-booking.component').then(
        (m) => m.CreateBookingComponent
      );
    },
  },
  {
    path: 'kitchen',
    loadComponent: () => {
      return import('./pages/kitchen/kitchen.component').then(
        (m) => m.KitchenComponent
      );
    },
  },
  {
    path: 'create-food',
    loadComponent: () => {
      return import('./components/create-food/create-food.component').then(
        (m) => m.CreateFoodComponent
      );
    },
  },
  
  {
    path: 'order-food',
    loadComponent: () => {
      return import('./pages/order-food/order-food.component').then(
        (m) => m.OrderFoodComponent
      );
    },
  },
];
