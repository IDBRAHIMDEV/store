import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(
        private authService: AuthService,
        private flashMessage: FlashMessagesService,
        private router: Router
        ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.user)
    .then(res => {
      this.flashMessage.show("You'are Logged successfully!", {
        cssClass: 'alert-success',
        timeout: 2000
      })
       this.router.navigate(['/products'])
    })
    .catch(err => {
     this.flashMessage.show(err.message, {
       cssClass: 'alert-warning',
       timeout: 8000
     })
    });
  }

}
