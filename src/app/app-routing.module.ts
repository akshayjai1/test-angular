import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
