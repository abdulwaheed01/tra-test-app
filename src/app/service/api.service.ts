import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Get all movies
  getMovies(filter) {
    let searchData = filter.split(',');
    let title = searchData[0];
    let genres = searchData[1];
    let year = searchData[2];
    let params = new HttpParams();
    if(title && title !==undefined){params = params.append('title', title);}
    if(genres && genres !==undefined){params = params.append('genres', genres);}
    if(year && year !==undefined){params = params.append('year', year);}
    return this.http.get(`${this.baseUri}/movies`,{params:params});
  }

  
  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}