import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PreRegistrationComponent,
    SponsorPageComponent,
    FaqComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
