import { Component } from '@angular/core';
import { DcfRequest, DcfResponse } from '../models/dcf';
import { ValuationService } from '../services/valuation-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dcf-calculator',
  imports: [FormsModule,CommonModule],
  templateUrl: './dcf-calculator.html',
  styleUrl: './dcf-calculator.css',
})
export class DcfCalculator {
  ticker:string='';
  growthRate:number=0.08;
  wacc:number = 0.10;
  terminalGrowthRate : number = 0.025;
  projectionYears:number = 5;
  netDebt:number = 0;

  result: DcfResponse | null = null;
  errorMessage:string = '';

  constructor(private valuationService: ValuationService,private route: ActivatedRoute){}

    ngOnInit(): void {
    const tickerFromUrl = this.route.snapshot.paramMap.get('ticker');
    if (tickerFromUrl) {
      this.ticker = tickerFromUrl;
    }
  }

  calculate(): void{
    this.errorMessage = '';
    this.result = null;
    
    const request : DcfRequest={
      growthRate: this.growthRate,
      wacc: this.wacc,
      terminalGrowthRate: this.terminalGrowthRate,
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
