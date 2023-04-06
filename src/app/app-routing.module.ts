import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'logged',
    canActivate: [AuthService],
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('./pages/logged/tabs/tabs.module').then(m => m.TabsPageModule)
      },


    ]
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
