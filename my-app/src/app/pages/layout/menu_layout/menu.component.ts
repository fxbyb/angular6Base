import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../shared/services/core.service';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuLayoutComponent implements OnInit{

  constructor(
    private core: CoreService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.core.get())
    this.core.set(2);
    console.log(this.core.get())
  }
}
