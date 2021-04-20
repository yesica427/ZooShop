import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import {MenuComponent} from './components/menu/menu.component';
import {RegistroComponent} from './components/registro/registro.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  // {path:'', pathMatch:'full',redirectTo:'/login'},

  {path:'index', component:IndexComponent},
  {path:'',pathMatch:'full',redirectTo:'/index'},
  {path:'menu', component:MenuComponent},
  {path:'registro', component:RegistroComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
