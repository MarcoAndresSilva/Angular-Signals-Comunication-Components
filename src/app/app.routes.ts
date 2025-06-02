import { Routes } from '@angular/router';
import Home from './components/home/home.component';
import { Page2Component } from './components/page-2/page-2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo: 'home' }
];
