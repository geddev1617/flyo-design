import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { FlyopageComponent } from './flyopage/flyopage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: '', component: FlyopageComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'team', component: TeamComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
