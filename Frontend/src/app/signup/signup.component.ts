import { Component, OnInit } from '@angular/core';
import { UserFire } from '../service/http-client.service';
import {  HttpClientService } from '../service/http-client.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  username = ''
  password = ''
  signUser:UserFire=new UserFire("","");
  already_user:string;
  msg:string="User id already exists,try with other id!";
  constructor(private httpClientService: HttpClientService,public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }
  handleSuccessfulResponse(response)
{
      this.already_user =response;
      console.log("already user?",this.already_user);
      if (this.already_user=="-1"){
        alert(this.msg)
    
      }

      if (this.already_user=="1"){
        console.log("sign up succ")
        this.openDialog()
            }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '350px',
      data: "Sign up successfull, Do you want to login? "
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.router.navigate([''])

        // DO SOMETHING
      }
    });
  }


  Signup()
  {
 this.signUser.username=this.username;
 this.signUser.password=this.password;
 if(this.username=='')
 {
   alert("Username Empty!");
 }
 if(this.password=='')
 {
   alert("Password Empty!");
 }
 if(this.username!='' && this.password!=''){
 this.httpClientService.SignUp(this.signUser).subscribe(
  response =>this.handleSuccessfulResponse(response),);
  
 
 }

 
 

     
  

  }
}
