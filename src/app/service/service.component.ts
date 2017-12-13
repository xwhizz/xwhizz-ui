import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit,AfterViewInit {

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
