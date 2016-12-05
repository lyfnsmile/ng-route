import { Route } from '@angular/router';

import { newsDetailComponent } from './detail/detail.component'
import { newsListComponent } from './list/list.component'

export const newsRoutes: Route[] = [{
    path: 'news',
    children: [{
        path: 'list',
        component: newsListComponent
    }, {
        path: 'detail/:id',
        component: newsDetailComponent
    }]
}];
