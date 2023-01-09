import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { HandbagComponent } from './components/handbag/handbag.component';
import { RouterModule, Routes } from '@angular/router';

const router:Routes=[
  {path:'Account/:user', component:UserAccountComponent},
  {path:'Handbag/:userBasketStore', component:HandbagComponent}

]

@NgModule({
  declarations: [
    UserAccountComponent,
    HandbagComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class UserModule { }
