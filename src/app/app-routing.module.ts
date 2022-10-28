import { RouterModule, Routes } from '@angular/router';
import { AuthIsLoginGuard } from 'src/guards/auth-is-login.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
    canActivate: [AuthIsLoginGuard]
  },

];


export const routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });
