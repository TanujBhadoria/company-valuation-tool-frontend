import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username:string = '';
  password:string='';
  errorMessage:string='';

  constructor(private authService : AuthService,private router : Router){}

  submit(): void{
    this.errorMessage = '';

    this.authService.register({username: this.username,password:this.password }).subscribe({
      next: ()=>{
        this.router.navigate(['/']);
      },
      error: (err) =>{
        this.errorMessage = "Registration Failed. username already exist.";
        console.log(err);
      }
    });

    
  }
}
