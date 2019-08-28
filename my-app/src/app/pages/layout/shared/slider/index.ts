import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-slider-layoutshare',
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
export class SliderLayoutshareComponent implements OnInit{
  // constructor

  constructor(
    private router: Router,
    private core: CoreService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
