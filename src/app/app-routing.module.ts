import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartareaComponent } from './cartarea/cartarea.component';
import { CustomizeComponent } from './customize/customize.component';
import { FooterComponent } from './footer/footer.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { SignUsComponent } from './sign-us/sign-us.component';

const routes: Routes = [
{path: 'home', component: MainHomeComponent},
{path: 'order', component: OrderNowComponent},
{path: 'custom', component: OrderMenuComponent},
{path: 'food/:id', component: CustomizeComponent},
{path: '', component: MainHomeComponent},
{path:'sign-up', component: SignUsComponent},
{path:'cartarea', component: CartareaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
