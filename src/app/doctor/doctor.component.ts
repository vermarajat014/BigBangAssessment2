import { Component, OnInit } from '@angular/core';
import { DoctorService, Doctor } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  currentDoctor: Doctor = { dId: 0, dName: '', dSpecialization: '', dStatus: '', dAddress: '', dMobileNumber: '' };
  isAddFormVisible = false;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  addDoctor(): void {
    this.doctorService.createDoctor(this.currentDoctor).subscribe(() => {
      this.resetForm();
      this.loadDoctors();
      this.isAddFormVisible = false; // Hide the add form after successfully adding a doctor
    });
  }

  cancelAddForm(): void {
    this.isAddFormVisible = false; // Hide the add form when the user cancels
    this.resetForm();
  }

  showAddForm(): void {
    this.isAddFormVisible = true; // Display the add form when the user clicks "Add New Doctor" button
  }

  resetForm(): void {
    this.currentDoctor = { dId: 0, dName: '', dSpecialization: '', dStatus: '', dAddress: '', dMobileNumber: '' };
  }

  deleteDoctor(doctorId: number): void {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctor(doctorId).subscribe(() => {
        this.loadDoctors();
      });
    }
  }

  editDoctor(doctor: Doctor): void {
    this.currentDoctor = { ...doctor };
    this.isAddFormVisible = true; // Show the add form when editing an existing doctor
  }

  updateDoctor(): void {
    this.doctorService.updateDoctor(this.currentDoctor).subscribe(() => {
      this.resetForm();
      this.loadDoctors();
      this.isAddFormVisible = false; // Hide the add form after successfully updating a doctor
    });
  }
}
