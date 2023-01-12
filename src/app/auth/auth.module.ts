import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './componets/register/register.component';
import { LoginComponent } from './componets/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const router:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(router)
  ]
})
export class AuthModule { }
