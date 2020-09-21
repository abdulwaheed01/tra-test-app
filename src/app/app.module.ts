import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NoCommaPipe } from './components/movies/NoCommaPipe';
import { SearchPipe } from './components/movies/SearchPipe';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderService } from './service/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component'


@NgModule({
  declarations: [
    AppComponent,
    NoCommaPipe,
    MoviesComponent,
    MyLoaderComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule
     
  ],
  providers: [ApiService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
