import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-phone-expensive',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class ExpensiveComponent implements OnInit{
  constructor(
    // private indexService: IndexService
  ){

  }
  ngOnInit(): void {
    console.log('expensive');
  }

}
