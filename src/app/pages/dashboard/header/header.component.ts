import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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
