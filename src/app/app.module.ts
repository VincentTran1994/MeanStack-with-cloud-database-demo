// import { swal } from 'sweetalert';
import { ScheduleComponent } from './schedule/schedule.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule,Route } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie-index/movie.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        ListOrdersComponent,
        NavbarComponent,
        HomeComponent,
        ScheduleComponent,
        AboutComponent,
        DetailMovieComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
      // {
      //   path:'*',
      //   component: MovieComponent
      // },
            {
                path:'welcome',
                component: MovieComponent
            },
            {
                path:'homePage',
                component: HomeComponent
            },
            {
                path: 'list/:id',
                component: ListOrdersComponent
            },
            {
                path: 'list',
                component: ListOrdersComponent
            },
            {
                path: 'schedule',
                component: ScheduleComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'detail/:id',
                component: DetailMovieComponent
            },
            // {
            //     path: '', redirectTo: 'welcome', pathMatch: 'full'
            // },
            {
                path: '**',
                component: MovieComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
