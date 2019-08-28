import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultLayoutComponent implements OnInit{
  // constructor

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
