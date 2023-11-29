import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    
    path:'home',
    component:HomeComponent
  },
  {
    
    path:'about',
    component:AboutComponent
  },
  {
    path:'works',
    component:WorksComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
