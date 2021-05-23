import { Routes } from '@angular/router';
import { LandingComponent } from '../../landing/landing.component';
import { LoginComponent } from '../../login/login.component';

export const PreloginRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: LandingComponent },
];