import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
// import {searchMoviePipe} from './searchMoviePipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  Movies:any = [];
  searchData:any = '';


  constructor(private apiService: ApiService) { 
    this.getMovies();
  }

  ngOnInit(): void {}

  getMovies(){
    this.apiService.getMovies(this.searchData).subscribe((data) => {
     this.Movies = data;
    })    
  }

}
