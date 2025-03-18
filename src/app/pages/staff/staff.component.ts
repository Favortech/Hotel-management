import { Component, OnInit } from '@angular/core';
import { Staff } from '../../models/staff';
import { StaffService } from '../../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  imports: [],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent implements OnInit {

  staffs: any[] = [];
editStaff: any;
deleteStaff: any;

 constructor(private staffService: StaffService, private router: Router) {}
ngOnInit(): void {
  this.loadStaffs
}

loadStaffs(): void {
  this.staffService.getStaffs().subscribe((staffs: any[]) => {
      this.staffs = staffs;
     console.log(staffs)
    })
  }
}