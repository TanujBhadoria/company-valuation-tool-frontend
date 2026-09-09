import { Component } from '@angular/core';
import { CompanyService } from '../services/company-service';
import { Router, RouterLink } from '@angular/router';
import { Company } from '../models/company';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-home',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './add-home.html',
  styleUrl: './add-home.css',
})
export class AddHome {
  ticker:string='';
  name:string='';
  revenue:number=0;
  ebitda:number=0;
  netIncome:number=0;
  sharesOutStanding:number=0;

  errorMessage:string ='';

  constructor(private companyService:CompanyService,private router:Router){}

  submit():void{
    this.errorMessage = '';
    const company: Company={
      ticker: this.ticker,
      name: this.name,
      revenue: this.revenue,
      ebitda : this.ebitda,
      netIncome: this.netIncome,
      sharesOutstanding:this.sharesOutStanding
    }
    this.companyService.createCompany(company).subscribe({
      next:()=>{
        this.router.navigate(['/']);
      },
      error:(err) => {
        this.errorMessage = 'Error adding company. Please try again.';
        console.log(err);
      }
    });
  }
}
