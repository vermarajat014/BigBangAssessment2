import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private authService: AuthserviceService, private router: Router) {}

  ngOnInit() {
    this.initForm();
    // Check if a valid token is present on component initialization
    if (this.authService.hasValidToken()) {
      this.authService.fetchUserRole().subscribe(
        (response) => {
          const userRole = response.role;
          this.authService.setUserRole(userRole);
          this.router.navigateByUrl('/home');
        },
        (error) => {
          console.error(error);
          alert('An error occurred during login.');
        }
      );
    }
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginprocess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          console.log(result);
          const token = result.token;
          const userRole = result.role;
         
          localStorage.setItem('token',result.token);
          if(result.role=='doctor'){
            alert('Doctor Login successful');
            this.router.navigateByUrl('/doctor');
          }
          else if(result.role=='patient'){
            alert(' Patient Login successful');
            this.router.navigateByUrl('/patient');
          }
          else if(result.role=='admin'){
            alert('Admin Login successful');
            this.router.navigateByUrl('/home');
          }
          this.authService.setToken(token);
          this.authService.setUserRole(userRole);

          
        },
        (error) => {
          console.error(error);
          alert('An error occurred during login.');
          console.log(error.status); // Log the status code
          console.log(error.error); // Log the error object
        }
      );
    }
  }

  logout() {
    // Clear the token and user role
    this.authService.clearToken();
    this.authService.clearUserRole();
    this.router.navigateByUrl('/login');
  }
}
