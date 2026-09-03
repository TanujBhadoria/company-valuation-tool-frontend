import { Component } from '@angular/core';
import { DcfRequest, DcfResponse } from '../models/dcf';
import { ValuationService } from '../services/valuation-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dcf-calculator',
  imports: [],
  templateUrl: './dcf-calculator.html',
  styleUrl: './dcf-calculator.css',
})
export class DcfCalculator {
  ticker:string='';
  growthRate:number=0.08;
  wacc:number = 0.10;
  terminalGrowthrate : number = 0.025;
  projectionYears:number = 5;
  netDebt:number = 0;

  result: DcfResponse | null = null;
  errorMessage:string = '';

  constructor(private valuationService: ValuationService){}

  calculate(): void{
    this.errorMessage = '';
    this.result = null;
    
    const request : DcfRequest={
      growthRate: this.growthRate,
      wacc: this.wacc,
      terminalGrowthRate: this.terminalGrowthrate,
      projectionYears: this.projectionYears,
      netDebt: this.netDebt
    };

    this.valuationService.calculateDcf(this.ticker,request).subscribe({
         next: (data) => {
        this.result = data;
      },
      error: (err) => {
        this.errorMessage = 'Error calculating DCF. Check ticker and try again.';
        console.error(err);
      }
    });
  }
}
