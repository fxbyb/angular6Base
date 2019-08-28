import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { StorageManager } from '@shared/utils/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{
  // constructor
  password = '';
  name = '';
  constructor(
    protected routerInfo: ActivatedRoute,
    private router: Router,
    private msg: NzMessageService
    ) {
  }
  ngOnInit(): void {
    StorageManager.set('loginUserMes', null);
  }
  login() {
    if (this.name === 'bao' && this.password == '123'){
      const userMes = {
        name: this.name,
        userId: '123'
      }
      StorageManager.set('loginUserMes', userMes);
      this.router.navigate(['/home']);
    } else {
      this.msg.error('密码错误');
    }
  }
}
