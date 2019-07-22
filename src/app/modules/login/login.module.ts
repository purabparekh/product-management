import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(loginRoutes),
  ]
})
export class LoginModule { }
