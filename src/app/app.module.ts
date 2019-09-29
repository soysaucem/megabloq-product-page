import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { ChartsModule } from 'ng2-charts';
import { FacebookModule } from 'ngx-facebook';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminMenuBarComponent } from './components/admin-menu-bar/admin-menu-bar.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ClickTrackingComponent } from './components/click-tracking/click-tracking.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormDataDetailComponent } from './components/form-data-detail/form-data-detail.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { FormComponent } from './components/form/form.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { MasterHeadComponent } from './components/master-head/master-head.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MasterHeadComponent,
    FooterComponent,
    GetStartedComponent,
    SocialNetworkComponent,
    VideoBoxComponent,
    AdministrationComponent,
    FormComponent,
    AdminMenuBarComponent,
    FormDataComponent,
    ClickTrackingComponent,
    FormDataDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgbModule,
    Angulartics2Module.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
