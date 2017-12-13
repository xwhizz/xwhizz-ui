import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

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
