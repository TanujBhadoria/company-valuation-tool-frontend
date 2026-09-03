import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyService } from './services/company-service';
import { Company } from './models/company';
import { DcfCalculator } from './dcf-calculator/dcf-calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,DcfCalculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
