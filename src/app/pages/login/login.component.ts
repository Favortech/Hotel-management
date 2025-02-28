
  import { Component, OnInit } from '@angular/core';

  import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
  @Component({
    selector: 'app-login',
    imports: [CommonModule,FormsModule,ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })
  export class LoginComponent implements OnInit {
  
    model: any = {};
  
    constructor(private _authenticationService: AuthenticationService, private _router: Router) { }
  


    ngOnInit() {
    }
  
    login() {
      // this._authenticationService.login(this.model.emailAddress, this.model.password).subscribe(
        // () => {
      //     window.alert("Successfully logged in!");
      //     this._router.navigate(['']);
      //   },
      //   (error: { error: any; }) => {
      //     window.alert(error.error);
      //   }
      // )
    }
  
  }
  
