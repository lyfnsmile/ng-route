import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { newsRoutes } from './news/news.route'
import { notFoundComponent } from './notfound/notfound.component'

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    ...newsRoutes,

    {
        path: '**',
        component: notFoundComponent
    }
];
