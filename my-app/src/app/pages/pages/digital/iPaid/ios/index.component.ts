import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-ipaid-ios',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IosComponent implements OnInit{
  constructor(
    // private indexService: IndexService
  ){

  }
  ngOnInit(): void {
    console.log('ios')
  }

}
