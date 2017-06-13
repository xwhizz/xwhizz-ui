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
import { ClientExperienceComponent } from './client-experience/client-experience.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { CustomPhpDevelopmentComponent } from './cmp_services/custom-web-development/custom-php-development/custom-php-development.component';
import { CustomWebDevelopmentHomeComponent } from './cmp_services/custom-web-development/custom-web-development-home/custom-web-development-home.component';
import { ECommerceComponent } from './cmp_services/custom-web-development/e-commerce/e-commerce.component';
import { CmsCustomisationComponent } from './cmp_services/custom-web-development/cms-customisation/cms-customisation.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', children: [
    { path: 'custom_web_development', component: CustomWebDevelopmentComponent, children: [
        { path: '', component: CustomWebDevelopmentHomeComponent },
        { path: 'custom_php_development', component: CustomPhpDevelopmentComponent },
        { path: 'e-commerce', component: ECommerceComponent },
        { path: 'cms-customisation', component: CmsCustomisationComponent }
    ] },
    { path: 'web_design', component: WebDesignComponent },
    { path: 'testing_qa', component: TestingQaComponent },
    { path: 'support_service', component: SupportServiceComponent },
    { path: 'internet_marketing', component: InternetMarketingComponent }
  ] },
  { path: 'career', component: CareerComponent },
  { path: 'client-experience', component: ClientExperienceComponent },
  { path: 'contact-us', component: ContactUsComponent }
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
    InternetMarketingComponent,
    ClientExperienceComponent,
    ContactUsComponent,
    CareerComponent,
    CustomPhpDevelopmentComponent,
    CustomWebDevelopmentHomeComponent,
    ECommerceComponent,
    CmsCustomisationComponent
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



