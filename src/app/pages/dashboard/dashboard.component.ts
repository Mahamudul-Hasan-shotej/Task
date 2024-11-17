import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LayoutComponent } from "./layout/layout.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  
  constructor(private router: Router,private authService:AuthService) {}

  logout() {
    if (this.authService.logout()) {
      alert('Logout Successful');
      this.router.navigate(['/landing']); // Navigate to the dashboard
    } else {
      alert('Somthing Wrong');
    }
  }
}
