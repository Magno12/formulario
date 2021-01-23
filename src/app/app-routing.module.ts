import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modal-contas',
    loadChildren: () => import('./cadastro/modal-contas/modal-contas.module').then( m => m.ModalContasPageModule)
  },
  {
    path: 'modal-categoria',
    loadChildren: () => import('./cadastro/modal-categoria/modal-categoria.module').then( m => m.ModalCategoriaPageModule)
  },
  {
    path: 'modal-status',
    loadChildren: () => import('./cadastro/modal-status/modal-status.module').then( m => m.ModalStatusPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
