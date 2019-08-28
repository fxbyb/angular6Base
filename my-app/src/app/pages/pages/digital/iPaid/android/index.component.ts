import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-ipaid-android',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class AndroidComponent implements OnInit{
  constructor(
    // private indexService: IndexService
  ){

  }
  ngOnInit(): void {
    console.log('android')
  }

}
