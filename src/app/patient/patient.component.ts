import { Component, OnInit } from '@angular/core';
import { DoctorService, Doctor } from '../doctor.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  activeDoctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.fetchActiveDoctors();
  }

  fetchActiveDoctors(): void {
    this.doctorService.getAllActiveDoctors().subscribe(
      (doctors: Doctor[]) => {
        this.activeDoctors = doctors;
      },
      (error: any) => {
        console.error('Failed to fetch active doctors:', error);
      }
    );
  }
  }


