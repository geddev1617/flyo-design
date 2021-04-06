import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlyopageComponent } from './flyopage/flyopage.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    TeamComponent,
    NavBarComponent,
    FlyopageComponent,
    FooterComponent,
    SigninComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
