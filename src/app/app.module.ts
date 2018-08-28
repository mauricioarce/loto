import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home/home.component';
import { TicketsStoreComponent } from './tickets-store/tickets-store.component';
import { ResultsComponent } from './results/results.component';
import { VideosComponent } from './videos/videos.component';
import { MessagesComponent } from './messages/messages.component';
import { ShellComponent } from './shell/shell.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketComponent,
    HomeComponent,
    TicketsStoreComponent,
    ResultsComponent,
    VideosComponent,
    MessagesComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
