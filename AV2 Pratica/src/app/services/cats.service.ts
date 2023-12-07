import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cat } from '../model/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseUrl = 'https://freetestapi.com/api';

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat> {
    return this.http.get<Cat>(`${this.baseUrl}/v1/cats`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Erro retornado pela API
      errorMessage = `Server-side error:\nCode: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
