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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent,
    NavbarComponent,
    HomeComponent,
    ScheduleComponent,
    AboutComponent,
    DetailMovieComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'*',
        component: HomeComponent
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
      {
        path: '**',
        component: HomeComponent
      }
    ])   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
