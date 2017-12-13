import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      $( document ).ready(function() {
        console.log('here', $('#loader'));
        $('#loader').delay(1000).fadeOut('slow');

        var $imagePopup = $('[data-image-popup]');

        /*Image*/
        $imagePopup.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });
      });
  }

}
