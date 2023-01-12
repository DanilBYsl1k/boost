import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponentsModule } from '../additions-component/addition-components.module';

const router:Routes=[
  {path:'', pathMatch:'full', redirectTo:'main'},
  {path:'main', component:MainPageComponent, children:[
    {path:':paragraph', component:MainPageComponent}
  ]},
  {path:'categories', component:CategoriesComponent,
    children:[
      {path:':paragraph', component:CategoriesComponent}
    ]},
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
    AdditionComponentsModule,
    RouterModule.forChild(router)
  ]
})
export class FeedModule { }

