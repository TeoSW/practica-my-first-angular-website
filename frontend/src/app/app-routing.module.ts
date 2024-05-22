import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HomeComponent } from './home/home.component';
import { ThankPageComponent } from './booking-page/thank-page/thank-page.component';
import { AppetizersComponent } from './menu-page/components/appetizers/appetizers.component';
import { SushiComponent } from './menu-page/components/sushi/sushi.component';
import { RamenComponent } from './menu-page/components/ramen/ramen.component';
import { MeatComponent } from './menu-page/components/meat/meat.component';
import { VeganComponent } from './menu-page/components/vegan/vegan.component';
import { DrinksComponent } from './menu-page/components/drinks/drinks.component';
import { SakeComponent } from './menu-page/components/sake/sake.component';
import { DessertComponent } from './menu-page/components/dessert/dessert.component';
import { InfoComponent } from './header-bar/burger-button/info/info.component';
import { HistoryComponent } from './header-bar/burger-button/history/history.component';
import { JobsComponent } from './header-bar/burger-button/jobs/jobs.component';
import { ContactComponent } from './header-bar/burger-button/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'booking', 
    component: BookingPageComponent,
  },
  {
    path: 'thank-you',
    component: ThankPageComponent,
  },
  {
    path: 'menu/appetizers', 
    component: AppetizersComponent,
  },
  {
    path: 'menu/sushi', 
    component: SushiComponent,
  },
  {
    path: 'menu/ramen', 
    component: RamenComponent,
  },
  {
    path: 'menu/meat', 
    component: MeatComponent,
  },
  {
    path: 'menu/vegan', 
    component: VeganComponent,
  },
  {
    path: 'menu/drinks', 
    component: DrinksComponent,
  },
  {
    path: 'menu/sake', 
    component: SakeComponent,
  },
  {
    path: 'menu/desserts', 
    component: DessertComponent,
  },
  {
    path: 'nav/info', 
    component: InfoComponent,
  },
  {
    path: 'nav/history', 
    component: HistoryComponent,
  },
  {
    path: 'nav/jobs', 
    component: JobsComponent,
  },
  {
    path: 'nav/contact', 
    component: ContactComponent,
  },
  {
    path: 'admin', 
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
      
}
