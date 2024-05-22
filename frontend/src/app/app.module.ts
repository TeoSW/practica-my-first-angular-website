import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BurgerButtonComponent } from './header-bar/burger-button/burger-button.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingButtonComponent } from './main-body/booking-button/booking-button.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ContactComponent } from './header-bar/burger-button/contact/contact.component';
import { JobsComponent } from './header-bar/burger-button/jobs/jobs.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    BurgerButtonComponent,
    MainBodyComponent,
    BookingPageComponent,
    BookingButtonComponent,
    HomeComponent,
    ThankPageComponent,
    AppetizersComponent,
    SushiComponent,
    RamenComponent,
    MeatComponent,
    VeganComponent,
    DrinksComponent,
    SakeComponent,
    DessertComponent,
    InfoComponent,
    HistoryComponent,
    ContactComponent,
    JobsComponent,
    AdminComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
