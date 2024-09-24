import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatergoryinputComponent } from './catergoryinput/catergoryinput.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewnotavailableComponent } from './viewnotavailable/viewnotavailable.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { StoreModule } from '@ngrx/store';
import { useReducer } from './ngrx/user.reducer';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsComponent,
    CategorycardComponent,
    ProductcardComponent,
    CatergoryinputComponent,
    AdminloginComponent,
    ViewnotavailableComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({user:useReducer})
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(), provideNativeDateAdapter(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
