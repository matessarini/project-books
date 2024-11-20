import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerosComponent } from './pages/generos/generos.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generos', component: GenerosComponent },
  { path: 'sobre', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
