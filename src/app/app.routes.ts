import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"about", component: AboutComponent},
    {path:"login", component: LoginComponent},
    {path:"contact", component: ContactComponent},
    {path:"", component: HomeComponent},
    {path:"profile", component: ProfileComponent},
    // {path:"about", component: AboutComponent},
];
