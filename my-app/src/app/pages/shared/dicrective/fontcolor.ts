
// <input type="text" [number] [defaultVal]="0" [(ngModel)]="mane">

import {Directive, Input, ElementRef, HostListener} from "@angular/core";
import { NgModel } from '@angular/forms';
@Directive({
  selector:'[number]'
})
export class FontColorDirective{
  @Input('number') num;
  @Input('defaultVal') defaultVal = '';
  constructor(
    private element: ElementRef,
    private control: NgModel
    ){
  }
  @HostListener('keyup', ['$event']) onkeyup(event){
    const e = <KeyboardEvent> event;
    const target = this.element.nativeElement;
    if(target.value.length>3){
      const value = target.value.slice(0, 3)
      console.log(value);
      target.value = value;
      this.control.viewToModelUpdate(target.value);
      e.preventDefault();
      return ;
    }
  }
}