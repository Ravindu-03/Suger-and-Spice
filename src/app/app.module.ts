import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPannelComponent } from './nav-pannel/nav-pannel.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FooterComponent } from './footer/footer.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { CustomizeComponent } from './customize/customize.component';
import { SignUsComponent } from './sign-us/sign-us.component';
import { CartareaComponent } from './cartarea/cartarea.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavPannelComponent,
    MainHomeComponent,
    FooterComponent,
    OrderNowComponent,
    ContactpageComponent,
    OrderMenuComponent,
    CustomizeComponent,
    SignUsComponent,
    CartareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
