import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private validUser = { email: 'emilys', password: 'emilyspass' };

  async login(user: { email: string; password: string }): Promise<boolean> {
    if (user.email === this.validUser.email && user.password === this.validUser.password) {
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: user.email,
            password: user.password,
            expiresInMins: 30, // optional, defaults to 60
          }),
          credentials: 'include', // Include cookies (e.g., accessToken) in the request
        });

        if (!response.ok) {
          throw new Error(`Login failed: ${response.statusText}`);
        }

        const data = await response.json();

        // Save access token in localStorage
        localStorage.setItem('auth', JSON.stringify({ accessToken: data.accessToken }));

        console.log('Login successful:', data);
        return true;
      } catch (error) {
        console.error('Error during login:', error);
        return false;
      }
    } else {
      console.error('Invalid user credentials');
      return false;
    }
  }



  logout() {
    localStorage.removeItem('auth');
    return true;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') !== null;
  }
}
