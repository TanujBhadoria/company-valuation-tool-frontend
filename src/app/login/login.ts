import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username : string = '';
  password : string = '';
  errorMessage : string = '';


  constructor(private authService: AuthService,private router : Router){}

  submit():void{
    this.errorMessage = '';
    this.authService.login({username: this.username,password : this.password}).subscribe({
      next:() =>{
        this.router.navigate(['/']);
      },
      error:(err) => {
        this.errorMessage = 'Invalid username or password';
        console.log(err);
      }
    });
  }
}
