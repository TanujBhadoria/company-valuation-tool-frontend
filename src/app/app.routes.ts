import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddHome } from './add-home/add-home';
import { DcfCalculator } from './dcf-calculator/dcf-calculator';
import { Login } from './login/login';
import { Register } from './register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path: '',component:Home,canActivate:[authGuard]},
    {path: 'add-company',component:AddHome,canActivate:[authGuard]},
    {path: 'dcf/:ticker',component:DcfCalculator,canActivate:[authGuard]}
];
