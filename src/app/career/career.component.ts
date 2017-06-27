import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  tabs = ['Career and Development', 'Innovative Technology stack', 'Freedom to learn new technology',
      'Work Life Balance', 'Reward and Recognition', 'Value and Leadership'];

  selectedTab = 0;

  changeSelectedTab(tab) {
    this.selectedTab = tab;
  }

  constructor() { }

  ngOnInit() {
  }

}
