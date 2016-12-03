import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { newsRoutes } from './news/news.route'
import { notFoundComponent } from './notfound/notfound.component'

export const appRoutes: Routes = [{
        path: '',
        component: AppComponent
    }, {
        path: '**',
        component: notFoundComponent
    },
    ...newsRoutes
];
