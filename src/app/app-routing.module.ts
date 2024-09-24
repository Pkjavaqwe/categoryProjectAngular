import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { CatergoryinputComponent } from './catergoryinput/catergoryinput.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewnotavailableComponent } from './viewnotavailable/viewnotavailable.component';
import { authGuards } from './guards/authguard';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  {
    path:'home',
    component:CategoriesComponent
  },
  {
    path:'addcategory',
    component:CatergoryinputComponent,
    canActivate:[authGuards]
    
  },
  {
    path:'editcategory/:categoryId',
    component:CatergoryinputComponent,
    canActivate:[authGuards]
  },
  {
    path:'login',
    component:AdminloginComponent
  },
  {
    path:'editpic/:categoryId',
    component:FileuploadComponent
  },
  {
    path:"**",
    component:ViewnotavailableComponent
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
