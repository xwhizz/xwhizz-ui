import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomWebDevelopmentComponent } from './cmp_services/custom-web-development/custom-web-development.component';
import { WebDesignComponent } from './cmp_services/web-design/web-design.component';
import { TestingQaComponent } from './cmp_services/testing-qa/testing-qa.component';
import { SupportServiceComponent } from './cmp_services/support-service/support-service.component';
import { InternetMarketingComponent } from './cmp_services/internet-marketing/internet-marketing.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', children: [
    { path: 'custom_web_development', component: CustomWebDevelopmentComponent },
    { path: 'web_design', component: WebDesignComponent },
    { path: 'testing_qa', component: TestingQaComponent },
    { path: 'support_service', component: SupportServiceComponent },
    { path: 'internet_marketing', component: InternetMarketingComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    CustomWebDevelopmentComponent,
    WebDesignComponent,
    TestingQaComponent,
    SupportServiceComponent,
    InternetMarketingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }



