import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'

import { AppComponent } from './app.component';
import { notFoundComponent } from './notfound/notfound.component'
import {NewsModule} from './news/news.module';
import { appRoutes } from './app.route';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        notFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NewsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
