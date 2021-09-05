import { Component, OnInit } from '@angular/core';
import { UserFire, HttpClientService } from '../service/http-client.service';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-fire',
  templateUrl: './login-fire.component.html',
  styleUrls: ['./login-fire.component.css']
})
export class LoginFireComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = true
  showSpinner=false
  message="Invalid Credentials"
 
  isUser:string;
  userfire:UserFire = new UserFire("","");

  constructor(    private httpClientService: HttpClientService, public loginservice: AuthenticateService,private router: Router) { }

  

ngOnInit(): void {
  sessionStorage.removeItem('username');

  }
handleSuccessfulResponse(response)
{
      this.showSpinner=false;

      this.isUser =response;
      console.log("is user??",this.isUser)
      if (this.isUser)
      {
       this.router.navigate(['home'])
       this.invalidLogin = false
      } 
      if(this.isUser=='-1')
      {
       this.invalidLogin = true
       alert(this.message);
      }
     if(this.isUser=='1')
     {
    //console.log("isusern",this.isUser);
    this.loginservice.authenticate(this.username, this.password,this.isUser);}
      
      }

checkLogin_fire()
{
  this.showSpinner=true;
    if(this.username=='' || this.password=='')
    {
      alert("Please Enter Details!")
      this.showSpinner=false;
      return;
    }
    this.userfire.username=this.username;
    this.userfire.password = this.password;
    this.httpClientService.checkLogin_fire(this.userfire).subscribe(
      response =>this.handleSuccessfulResponse(response),);
    
      //this.httpClientService.checkLogin_fire(this.userfire);
   //session storage
   
   
  
  }

}
