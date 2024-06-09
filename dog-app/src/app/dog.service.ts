import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private readonly API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng';
  private readonly API_KEY = 'live_JyYLK5l2sVjvy4YN01wfczwAXtk7JqUDNQzFI497auC1ysrRs9xPMlqKUFVwwYO4F'

  constructor(private http: HttpClient) { }

  getCat(): Observable<any[]> {
    const headers = new HttpHeaders().set('x-api-key', this.API_KEY);
    return this.http.get(this.API_URL, { headers }).pipe (
      map((response: any) => {
        console.log(response);
        return response;
      }),
      catchError((error) => throwError(error))
    );
  }
}