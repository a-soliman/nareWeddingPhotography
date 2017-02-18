import { Component } from '@angular/core';

import { PreloaderComponent } from './preloader.component';
import { ToggleMenuComponent } from './toggle-menu.component';
import { IntroComponent } from './intro.component';
import { AboutComponent } from './about.component';
import { ServicesComponent } from './services.component';
import { SkillsComponent } from './skills.component';
import { PortfolioComponent } from './portfolio.component';
import { BlogComponent } from './blog.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';
import { GoogleMapsComponent } from './google-maps.component';





@Component({
  selector: 'app-root',
  template: `
  		<app-preloader></app-preloader>
		<app-toggle-menu></app-toggle-menu>
		<app-intro></app-intro>
		<app-about></app-about>
		<app-services></app-services>
		<app-skills></app-skills>
		<app-portfolio></app-portfolio>
		<app-blog></app-blog>
		<app-contact></app-contact>
		<app-google-maps></app-google-maps>
		<app-footer></app-footer>
  		`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nare app works!';

}
