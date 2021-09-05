import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit{

 result: string = '';
  constructor(public loginService:AuthenticateService,public dialog: MatDialog,private router: Router) { }
  title = 'angular-confirmation-dialog';
  
  openDialog(): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '350px',
      data: "Do you confirm to logout?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.router.navigate(['logout'])

        // DO SOMETHING
      }
    });
  }

 
  ngOnInit(): void {
  }
 
  
  

}
