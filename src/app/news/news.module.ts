import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { newsDetailComponent } from './detail/detail.component'
import { newsListComponent } from './list/list.component'
import {HighlightDirective} from './highlight.directive'

@NgModule({
    declarations: [
        newsDetailComponent,
        newsListComponent,
        HighlightDirective
    ],
    imports: [
        HttpModule,
    ],
    providers: [],
})
export class NewsModule {}
