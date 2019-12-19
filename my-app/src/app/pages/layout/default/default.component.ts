import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreService } from '../../shared/services/core.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultLayoutComponent implements OnInit{
  // constructorTemplateRef
  @ViewChild('headerL',{static: true}) head;
  constructor(
    private core: CoreService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      console.log(this.head);
      console.log(this.head.name);
    }, 2000);
    console.log(this.core.get())
    this.core.set(1);
    console.log(this.core.get())
  }
}
