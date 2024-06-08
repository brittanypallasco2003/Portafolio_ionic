import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'; 

  constructor(private http: HttpClient) { }

  getData(page: number, limit: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/photos?_page=${page}&_limit=${limit}`);
  }
}
