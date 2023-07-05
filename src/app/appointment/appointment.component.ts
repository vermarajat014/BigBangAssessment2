import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointment: any = {};

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) { }

  registerAppointment(): void {
    this.appointmentService.registerAppointment(this.appointment)
      .subscribe(
        response => {
          alert('Appointment registered successfully');
          //console.log('Appointment registered successfully');
          this.router.navigateByUrl('/patient');
        },
        error => {
          console.error('Error registering appointment:', error);
        }
      );
  }
}
