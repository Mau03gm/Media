import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'http://localhost:3000/api'; // Reemplaza con la URL de tu API local

  constructor(private http: HttpClient) { }

  getDatosSize(): Observable<any> {
    return this.http.get(`${this.apiUrl}/size`);
  }

  getDatosHours(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hours`);
  }
}
