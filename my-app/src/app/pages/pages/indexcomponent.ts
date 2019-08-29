import { Component, OnInit } from '@angular/core';
import { IndexService } from '../shared/services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit{
  constructor(
    private indexService: IndexService
  ){

  }
  mane = '';
  ngOnInit(): void {
    this.indexService.getIndexList({ob: 123}).subscribe(res =>{

    }, error => {
      console.log(error);
    });
    const parent = {
      name: '123'
    }
    console.log(parent);
    const Ap = {...parent, ...{name: '234'}};
    console.log(Ap);
  }

}
