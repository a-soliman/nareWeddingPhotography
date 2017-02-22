import { Component, Input, ElementRef, OnInit } from '@angular/core';
let $ = require('../../node_modules/jquery/dist/jquery.min.js');

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [ '../css/magnific-popup.css',
  				'./portfolio.component.css', 
  				]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showAll() {
  	$('.portfolio-box').show()
  }
  showCatOne() {
  	$('.portfolio-box').show()
  	$('.portfolio-box').not('.category-1').hide()
  }

  showCatTwo() {
  	$('.portfolio-box').show()
  	$('.portfolio-box').not('.category-2').hide()
  }


  closeModal() {
  	$('.modal').addClass('fade');
  	$('.modal').css('display', 'none')
  }
  //portfolio mark up
  item1 = {
  	names: "Evelyn & George",
  	image: "images/portfolio-1.jpg",
  	category: "category-1",
  	categoryStr: "Wedding",
  	details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
  			  et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.`,
  	modalId: "popup-1",
  	clicked() {
  		$('#' + this.modalId).css('display', 'block')
  		$('#' + this.modalId).removeClass('fade');
  	}

  }
  item2 = {
  	names: "Cyntia",
  	image: "images/portfolio-2.jpg",
  	category: "category-2",
  	categoryStr: "Engagement",
  	details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
  			  et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.`,
  	modalId: "popup-2",
  	clicked() {
  		$('#' + this.modalId).css('display', 'block')
  		$('#' + this.modalId).removeClass('fade');
  	}
  }
  item3 = {
  	names: "Engagement",
  	image: "images/portfolio-3.jpg",
  	category: "category-2",
  	categoryStr: "Engagement",
  	details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
  			  et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.`,
  	modalId: "popup-3",
  	clicked() {
  		$('#' + this.modalId).css('display', 'block')
  		$('#' + this.modalId).removeClass('fade');
  	}
  }
  item4 = {
  	names: "Ejayleen",
  	image: "images/portfolio-4.jpg",
  	category: "category-2",
  	categoryStr: "Quinceenera",
  	details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
  			  et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.`,
  	modalId: "popup-4",
  	clicked() {
  		$('#' + this.modalId).css('display', 'block')
  		$('#' + this.modalId).removeClass('fade');
  	}
  }
  item5 = {
  	names: "Keyli",
  	image: "images/portfolio-5.jpg",
  	category: "category-2",
  	categoryStr: "Quinceenera",
  	details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
  			  et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.`,
  	modalId: "popup-5",
  	clicked() {
  		$('#' + this.modalId).css('display', 'block')
  		$('#' + this.modalId).removeClass('fade');
  	}
  }
  item6 = {
  	names: "Evelyn",
  	image: "images/portfolio-8.jpg",
  	category: "category-1",
  	categoryStr: "Wedding",
  	details: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
  			  et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.`,
  	modalId: "popup-6",
  	clicked() {
  		$('#' + this.modalId).css('display', 'block')
  		$('#' + this.modalId).removeClass('fade');
  	}
  }

  portfolioItems=[this.item1, this.item2, this.item3, this.item4, this.item5, this.item6]

}
