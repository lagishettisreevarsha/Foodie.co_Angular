import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
})
export class RegisterComponent {
  regName=''
  regEmail=''
  regPass=''
  mesg=''
  constructor(private router:Router){}
  isClickedReg(){
    if(this.regName==='varsha'&& this.regEmail==='varsha@gmail.com'&&this.regPass==='ammu'){
      this.mesg=''
      this.router.navigate(['login']);
    }else{
  this.mesg='REGESTRATION FAILED'
    }
  }
}
