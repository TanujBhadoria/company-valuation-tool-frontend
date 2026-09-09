import { Component } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  companies: Company[] = [];
  
  constructor(private companyService: CompanyService){}

  ngOnInit():void{
    this.companyService.getAllCompanies().subscribe({
      next:(data) =>{
        this.companies = data;
      },
      error: (err)=> {
        console.error('Error Fetching companies: ',err);
      }
    });
}
}
