import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#loader').delay(1000).fadeOut('slow');
    $('.slider-active').owlCarousel({
      autoPlay: 800000000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      dots: true,
      slideSpeed: 500,
      pagination: true,
      navigation: false,
      loop: true,
      mouseDrag: true,
      singleItem: true,
      transitionStyle: "fade",
      addClassActive: true,
    });
  }


}
