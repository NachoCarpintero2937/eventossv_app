import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('../sales/sales.module').then(m => m.SalesPageModule)
      },
      {
        path: 'view-ticket',
        loadChildren: () => import('../view-ticket/view-ticket.module').then(m => m.CreateTicketPageModule)
      },
      {
        path: '',
        redirectTo: '/logged/tabs/landing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/logged/tabs/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
