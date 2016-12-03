import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { newsDetailComponent } from './news/detail/detail.component'
import { newsListComponent } from './news/list/list.component'
import { notFoundComponent } from './notfound/notfound.component'

import { appRoutes } from './app.route';


@NgModule({
    declarations: [
        AppComponent,
        newsDetailComponent,
        newsListComponent,
        notFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
