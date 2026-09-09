import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyService } from './services/company-service';
import { Company } from './models/company';
import { DcfCalculator } from './dcf-calculator/dcf-calculator';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
