import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit,AfterViewInit {

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
