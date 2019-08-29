import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultLayoutComponent implements OnInit{
  // constructorTemplateRef
  @ViewChild('headerL',{static: true}) head;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      console.log(this.head);
      console.log(this.head.name);
    }, 2000);
  }
}
