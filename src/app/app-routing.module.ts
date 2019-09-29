import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { MasterHeadComponent } from './components/master-head/master-head.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  {path: 'landing-page', component: MasterHeadComponent},
  {path: 'administration', component: AdministrationComponent},
];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
