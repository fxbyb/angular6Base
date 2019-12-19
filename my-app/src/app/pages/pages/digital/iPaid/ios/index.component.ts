import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-digital-ipaid-ios',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IosComponent implements OnInit{
  constructor(
    // private indexService: IndexService
    private core: CoreService
  ){

  }
  ngOnInit(): void {
    console.log('ios')
    console.log(this.core.get())
    this.core.set(4);
    console.log(this.core.get())
  }

}
