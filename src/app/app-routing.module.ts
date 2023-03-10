import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utilis/error/error.component';

const routes: Routes = [
  {
    path:'', loadChildren: () =>import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path:'auth', loadChildren: () =>import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path:'public', loadChildren: () =>import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path:'admin', loadChildren: () =>import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
  
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
