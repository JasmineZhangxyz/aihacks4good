import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

import { HomeComponent } from './home/home.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pre-registration', component: PreRegistrationComponent },
    { path: 'sponsor-page', component: SponsorPageComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);