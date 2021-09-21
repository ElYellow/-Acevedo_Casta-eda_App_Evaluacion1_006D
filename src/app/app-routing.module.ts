import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
  {
    path: 'windows',
    loadChildren: () => import('./pages/windows/windows.module').then( m => m.WindowsPageModule)
  },
  {
    path: 'activarwindows',
    loadChildren: () => import('./pages/activarwindows/activarwindows.module').then( m => m.ActivarwindowsPageModule)
  },
  {
    path: 'claves',
    loadChildren: () => import('./pages/claves/claves.module').then( m => m.ClavesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'limpiarpc',
    loadChildren: () => import('./pages/limpiarpc/limpiarpc.module').then( m => m.LimpiarpcPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
