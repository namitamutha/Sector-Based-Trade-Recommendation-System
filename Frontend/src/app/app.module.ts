import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { AddUserComponent } from './add-user/add-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import  {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { ShowrecommComponent } from './showrecomm/showrecomm.component';
import { NgxPopper } from 'angular-popper';
import { LoginFireComponent } from './login-fire/login-fire.component'
import { RecommsavedComponent } from './recommsaved/recommsaved.component'
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { SignupComponent } from './signup/signup.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md'
import { ChartsModule } from 'ng2-charts';


import {HttpClient} from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
   // UserComponent,
    //AddUserComponent,
    HeaderComponent,
    FooterComponent,
   // LoginComponent,
    LogoutComponent,
    HomeComponent,
    ShowrecommComponent,
    LoginFireComponent,
    RecommsavedComponent,
    
    MatConfirmDialogComponent,
    
    SignupComponent,


   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
     FlexLayoutModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatCardModule,
     MatToolbarModule,
     MatTableModule,
     NgxPopper,
     MatIconModule,
     MatProgressSpinnerModule,
     MatDialogModule,
     MatSortModule,
     MatTableModule,
     MDBBootstrapModule.forRoot(),
     ButtonsModule,
     WavesModule,
     CardsModule,
     HttpClientModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatIconModule,
     MatButtonModule,
     FlexLayoutModule,
     ChartsModule



     
    
     
    


  ],
  providers: [],
  entryComponents:[MatConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
