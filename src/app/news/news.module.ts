import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { newsDetailComponent } from './detail/detail.component'
import { newsListComponent } from './list/list.component'

@NgModule({
    declarations: [
        newsDetailComponent,
        newsListComponent
    ],
    imports: [
        HttpModule,
    ],
    providers: [],
})
export class NewsModule {}
