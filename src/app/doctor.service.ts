import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Doctor {
  dId: number;
  dName: string;
  dSpecialization: string;
  dStatus: string;
  dAddress: string;
  dMobileNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'https://localhost:7116/api/Doctor';

  constructor(private http: HttpClient) { }

  // Get all doctors
  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl);
  }

  // Create a new doctor
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.baseUrl, doctor);
  }

  // Update a doctor
  updateDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.baseUrl}/${doctor.dId}`;
    return this.http.put<Doctor>(url, doctor);
  }

  // Delete a doctor
  deleteDoctor(doctorId: number): Observable<any> {
    const url = `${this.baseUrl}/${doctorId}`;
    return this.http.delete(url);

  }




  getAllActiveDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl).pipe(
      map((doctors: Doctor[]) => doctors.filter(doctor => doctor.dStatus === 'active'))
    );
  }
}
