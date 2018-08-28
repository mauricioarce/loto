import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home/home.component';
import { TicketsStoreComponent } from './tickets-store/tickets-store.component';
import { ResultsComponent } from './results/results.component';
import { VideosComponent } from './videos/videos.component';
import { MessagesComponent } from './messages/messages.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'ticket',
        component: TicketComponent
      },
      {
        path: 'ticket-store',
        component: TicketsStoreComponent
      },
      {
        path: 'results',
        component: ResultsComponent
      },
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
