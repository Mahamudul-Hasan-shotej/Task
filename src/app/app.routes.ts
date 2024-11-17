import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileInfoComponent } from './pages/profile-info/profile-info.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './pages/error/error.component';
import { LandingComponent } from './pages/landing/landing.component';


export const routes: Routes = [
    {path:'' ,redirectTo: '/landing', pathMatch: 'full'},
    {path:'login' , component: LoginComponent },
    {path:'landing' , component: LandingComponent},
    {path:'profile' , component: ProfileComponent,canActivate:[AuthGuard]},
    {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
    {path: '**', component:ErrorComponent},
];
