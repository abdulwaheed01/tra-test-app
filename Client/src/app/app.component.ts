import { Component,OnInit,OnDestroy,ViewEncapsulation,Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements  OnInit, OnDestroy {
  title = 'tra-test-app';
  constructor( @Inject(DOCUMENT) private _document ) {}
  ngOnInit() {
    this._document.body.classList.add('bodybg-color');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.add('bodybg-color');
  }
}
