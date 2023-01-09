import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule, Routes } from '@angular/router';

const router:Routes=[
  {path:'', pathMatch:'full', redirectTo:'main'},
  {path:'main', component:MainPageComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'card/:id', component:CardComponent},
]

@NgModule({
  declarations: [
    MainPageComponent,
    CategoriesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class FeedModule { }
