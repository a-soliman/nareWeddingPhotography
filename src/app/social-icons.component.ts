import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  	facebook = {
  			icon: 'fa fa-facebook', 
  			href: 'https://www.facebook.com/profile.php?id=100005622619199&fref=ts',
  			target: '_blank'
  		}

  	phone = {
  			icon: 'fa fa-phone',
  			href: 'tel:+19546143334',
  	}

  	mail = {
  			icon: 'fa fa-envelope',
  			href: 'mailto:nareyepremyan25@gmail.com',
  	}

  	blog = {
  			icon: 'fa fa-bold',
  			href: 'http://narephotographer.blogspot.com/',
  			target: '_blank'
  	}

 social = [this.facebook, this.phone, this.mail, this.blog];


}
