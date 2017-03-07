import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechnologyComponent } from './industries/technology/technology.component';
import { HcLsComponent } from './industries/hc-ls/hc-ls.component';
import { MediaEntertainmentComponent } from './industries/media-entertainment/media-entertainment.component';
import { SupplyChainLogisticComponent } from './industries/supply-chain-logistic/supply-chain-logistic.component';
import { TravelHospitalityComponent } from './industries/travel-hospitality/travel-hospitality.component';
import { EnterpriseComponent } from './industries/enterprise/enterprise.component';
import { OnlineRetailComponent } from './industries/online-retail/online-retail.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'industry', children: [
    { path: 'technology', component: TechnologyComponent },
    { path: 'health_care_life_science', component: HcLsComponent },
    { path: 'media_entertainment', component: MediaEntertainmentComponent },
    { path: 'supply_chain_logistic', component: SupplyChainLogisticComponent },
    { path: 'travel_hospitality', component: TravelHospitalityComponent },
    { path: 'enterprise', component: EnterpriseComponent },
    { path: 'online_retail', component: OnlineRetailComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    TechnologyComponent,
    HcLsComponent,
    MediaEntertainmentComponent,
    SupplyChainLogisticComponent,
    TravelHospitalityComponent,
    EnterpriseComponent,
    OnlineRetailComponent
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



