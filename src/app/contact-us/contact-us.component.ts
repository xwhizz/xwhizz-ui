import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ContactUs }    from './contact-us';
declare var $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit,AfterViewInit {


  model = new ContactUs('', '', '', '');
  contactUsUrl = '/api/v1/contactUs';
  showLabel = false;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  dismissLabel() {
      this.showLabel = false;
  }

  ngAfterViewInit() {
        $( document ).ready(function() {
          console.log('here', $('#loader'));
          $('#loader').delay(1000).fadeOut('slow');
        });
    }

  onSubmit() {
    console.log(this.model);
    let bodyString = JSON.stringify(this.model); // Stringify payload
    console.log(bodyString);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.contactUsUrl, bodyString, options) // ...using post request
           .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
           .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if any
           .subscribe(res => {
              console.log(res);
              if(res === 'success') {
                this.showLabel = true;
                this.model = new ContactUs('', '', '', '');
              }
           }, err => {
              console.log(err);
           });

  }

}
