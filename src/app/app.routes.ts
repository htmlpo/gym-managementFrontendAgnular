import { Routes } from '@angular/router';
import { Members } from '../members/members';
import { Home } from '../home/home';

export const routes: Routes = [
         {
    path: '',
    component:Home
  },
    {
    path: 'members',
    component: Members
  }
];
