import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private registrationService: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    });
  }

  register() {
    if (this.formGroup.valid) {
      const registrationData = this.formGroup.value;
      this.registrationService.register(registrationData).subscribe(
        (response) => {
          console.log(response);
          alert('Registration successful');
          this.router.navigate(['/login']); // Redirect to the login page
        },
        (error) => {
          console.error(error);
          alert('An error occurred during registration.');
        }
      );
    }
  }
}
