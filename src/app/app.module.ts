import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { PreloaderComponent } from './preloader.component';
import { ToggleMenuComponent } from './toggle-menu.component';
import { AboutComponent } from './about.component';
import { ServicesComponent } from './services.component';
import { SkillsComponent } from './skills.component';
import { PortfolioComponent } from './portfolio.component';
import { BlogComponent } from './blog.component';
import { ContactComponent } from './contact.component';
import { GoogleMapsComponent } from './google-maps.component';
import { FooterComponent } from './footer.component';
import { SocialIconsComponent } from './social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PreloaderComponent,
    ToggleMenuComponent,
    AboutComponent,
    ServicesComponent,
    SkillsComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    GoogleMapsComponent,
    FooterComponent,
    SocialIconsComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-5igkHjeolmy6nC0nQngdsGKHrUBEy6c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
