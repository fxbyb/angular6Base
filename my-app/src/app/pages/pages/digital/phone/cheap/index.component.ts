import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-phone-cheap',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class CheapComponent implements OnInit{
  constructor(
    // private indexService: IndexService
  ){

  }
  ngOnInit(): void {
    console.log('cheap')
  }

}
