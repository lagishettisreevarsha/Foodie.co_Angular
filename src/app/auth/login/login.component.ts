import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export class LoginComponent {
  userName=''
  userPass=''
  message=''
  constructor(private router:Router){}
  isClickedLogin(){
    if (this.userName==='varsha' && this.userPass==='ammu') {
      this.router.navigate(['home'])
    }
    else{
      this.message='INVALID CREDENTIALS'
    }
  }
}

