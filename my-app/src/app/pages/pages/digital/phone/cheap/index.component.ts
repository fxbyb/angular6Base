import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-digital-phone-cheap',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class CheapComponent implements OnInit{
  constructor(
    // private indexService: IndexService
    private core: CoreService
  ){

  }
  ngOnInit(): void {
    console.log('cheap')
    console.log(this.core.get())
    this.core.set(5);
    console.log(this.core.get())
  }

}
