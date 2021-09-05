import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {MatSort} from '@angular/material/sort';


export interface NiftyElement
{
  
  id: string,

	shortname:string,
	
	mktcap:string,

	lastval:string,
	
	change:string,
	
	percentagechange:string,
	
	direction:string,
	
	volume:string,
   
  

}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  headElements = ['Sno','id','shortname','mktcap','lastval','change','percentagechange','direction','volume'];
   private sorted = false;

  loadCompleted:boolean = false;
  showSpinner:boolean=true;

 constructor(private httpClientService:HttpClientService) { }
 mynifty:NiftyElement[];
 
 ngOnInit(){
  this.httpClientService.getNifty50().subscribe(
    response =>this.handleSuccessfulResponse(response),
   );
  
  

  }
  
 handleSuccessfulResponse(response)
 {
  this.mynifty =response;
  this.loadCompleted = true;
  this.showSpinner=false;
  console.log("loadCompleted",this.loadCompleted);
 }

 sortBy(by: string | any): void {

  this.mynifty.sort((a: any, b: any) => {
    if (a[by] < b[by]) {
      return this.sorted ? 1 : -1;
    }
    if (a[by] > b[by]) {
      return this.sorted ? -1 : 1;
    }

    return 0;
  });

  this.sorted = !this.sorted;
}

 

 

}




