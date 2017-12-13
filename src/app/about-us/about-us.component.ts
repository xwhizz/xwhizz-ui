import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
        $( document ).ready(function() {
          console.log('here', $('#loader'));
          $('#loader').delay(1000).fadeOut('slow');
        });
    }

}
