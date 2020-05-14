import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieBookingService } from '../movie-booking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  isLoggedIn = 'false';
  users: any;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private bookingService: MovieBookingService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.success = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.bookingService.getUsers().subscribe(users => {
        this.users = users;
        this.authenticateUser();
      });

  }
  authenticateUser() {
    const name = this.loginForm.value.username;
    sessionStorage.setItem('username', name);
    const password = this.loginForm.value.password;
    const user = this.users.filter(currUser => currUser.username === name && currUser.password === password)[0];
    if (user) {
        this.isLoggedIn = 'true';
        sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
        this.success = true;
        this.router.navigate(['/movies']);
    } else {
        this.isLoggedIn = 'false';
        sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
        this.success = false;
    }
  }
  ngOnInit(): void {
  }

}
