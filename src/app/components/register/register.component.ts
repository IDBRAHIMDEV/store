import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  
  constructor(
       private authService: AuthService,
       private router: Router,
       private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  createAccount() {
    this.authService.register(this.user)
    .then(res => {
      this.flashMessage.show('Your account is created !', {
        cssClass: 'alert-success',
        timeout: 2000
      })
       this.router.navigate(['/login'])
    })
    .catch(err => {
     this.flashMessage.show(err.message, {
       cssClass: 'alert-warning',
       timeout: 8000
     })
    });
  }

}
