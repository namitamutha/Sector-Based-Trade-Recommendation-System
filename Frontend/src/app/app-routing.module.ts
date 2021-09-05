import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ShowrecommComponent } from './showrecomm/showrecomm.component';
import { AuthGuardService } from './service/auth-gaurd.service.spec';
import { LoginFireComponent } from './login-fire/login-fire.component';
import { RecommsavedComponent } from './recommsaved/recommsaved.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [ 
{path: '', component: LoginFireComponent},
{ path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService] },
{ path: 'home', component: HomeComponent,canActivate:[AuthGuardService] },
{ path: 'showrecomm', component:ShowrecommComponent ,canActivate:[AuthGuardService]},
{ path: 'recommsaved', component:RecommsavedComponent ,canActivate:[AuthGuardService]},
{ path: 'signup', component:SignupComponent ,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }