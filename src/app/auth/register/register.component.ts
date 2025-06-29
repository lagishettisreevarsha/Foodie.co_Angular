import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regName = ''
  regEmail = ''
  regPass = ''
  mesg = ''

  constructor(private router: Router) {}

  isClickedReg() {
    if (this.regName === 'varsha' && this.regEmail === 'varsha@gmail.com' && this.regPass === 'ammu') {
      this.mesg = ''
      this.router.navigate(['home']);
    } else {
      this.mesg = 'REGISTRATION FAILED';
    }
  }

}
