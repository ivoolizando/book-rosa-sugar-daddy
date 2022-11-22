import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'primeiratela',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'mensagem',
    loadChildren: () => import('./pages/mensagem/mensagem.module').then( m => m.MensagemPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  {
    path: 'primeiratela',
    loadChildren: () => import('./pages/primeiratela/primeiratela.module').then( m => m.PrimeiratelaPageModule)
  },
  {
    path: 'segundatela',
    loadChildren: () => import('./pages/segundatela/segundatela.module').then( m => m.SegundatelaPageModule)
  },
  {
    path: 'cadastroelogin',
    loadChildren: () => import('./pages/cadastroelogin/cadastroelogin.module').then( m => m.CadastroeloginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
