import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { ServicesComponent } from './layout/services/services.component';
import { VideoComponent } from './layout/video/video.component';
import { WorksComponent } from './layout/works/works.component';
import { TestimonialsComponent } from './layout/testimonials/testimonials.component';
import { TeamComponent } from './layout/team/team.component';
import { BlogComponent } from './layout/blog/blog.component';
import { CallToActionComponent } from './layout/call-to-action/call-to-action.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MouseTrackerDirective } from './directives/mouse-tracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ServicesComponent,
    VideoComponent,
    WorksComponent,
    TestimonialsComponent,
    TeamComponent,
    BlogComponent,
    CallToActionComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactUsComponent,
    MouseTrackerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
