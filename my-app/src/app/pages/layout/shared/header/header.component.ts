import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '@shared/services/core.service';
import { StorageManager } from '@shared/utils/storage';

@Component({
  selector: 'app-header-layoutshare',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderLayoutshareComponent implements OnInit{
  // constructor

  constructor(
    private router: Router,
    private core: CoreService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  logout(){
    StorageManager.set('loginUserMes', null);
    this.router.navigate(['/login']);
  }
}
