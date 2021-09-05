import { Component, OnInit } from '@angular/core';
import { HttpClientService, Parameters, KeyStats, UserFire } from '../service/http-client.service';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { kStringMaxLength } from 'buffer';
import { ChartsModule } from 'angular-bootstrap-md'

// tslint:disable-next-line: import-spacing
@Component({
  selector: 'app-showrecomm',
  templateUrl: './showrecomm.component.html',
  styleUrls: ['./showrecomm.component.css']
})



export class ShowrecommComponent implements OnInit {

  
  headElements=["SHORTNAME","MKTCAP","LASTVALUE","CHANGE","PERCENTAGECHANGE","YEARLYHIGH","YEARLYLOW","VOLUME","5 DAY AVG VOL","TODAYS OPEN",];
  //url='https://appfeeds.moneycontrol.com/jsonapi/stocks/graph&format=json&sc_id=MPS&ex=&range=1yr&type=line';
  selsect:string;
  items=[];
  loadComponent:boolean = false;

  response1: any;
  graphData=[10,20,30,40];
  username_comp_fire:string;
  recommstring:[{"username":"-","shortname":"-","mktcap":"-","lastvalue":"-","chg":"-","percentchange":"-","yearlyhigh":"-","yearlylow":"-","volume":"-","fdayavgvol":"-","todaysopen":"-","timestamp1":"-","timestamp_to_display":"-",}];
  paramerter:Parameters = new Parameters("");
  keystats:KeyStats[]=new Array();
  msg:string="Please Select Sector";
  msg1:string="No Recommendation present."
  flg:string='0';
  isSaved:number=-1;
  isSavedRow:string="-1";
  vari:any;
 
  ngOnInit(){
    //this.response1=this.showGraph_("ntpc");
    //console.log("response1 in ngOnit",this.response1);
    this.username_comp_fire=sessionStorage.getItem('username');
    //this.graphData=this.response1["x-date"];
    //console.log("graphData in ngOnit",this.graphData);
  }
  



  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartType: string = 'line';
  //trialarr:String []=["a","b","c"]
  t=this.showGraph_X("abc");
  public chartDatasets: Array<any> = [
    { data: this.t, label: 'My First dataset' },
    { data: [25,45,35], label: 'My Second dataset' }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  
printTempData(){
  this.graphData=[28, 48, 40, 19, 86, 27];
}
 

  un:string;
  constructor(
    private httpClientService: HttpClientService,private http:HttpClient


  ) { }
  selectedCar="plssel";
  loadCompleted:boolean = false;
  showSpinner:boolean=false;


  handleSuccessfulResponse(response)
  {
      this.recommstring =response;
      this.loadCompleted = true;
      this.showSpinner=false;
      console.log("loadCompleted",this.loadCompleted);
  }

 selectedSector(){
   this.isSaved=-1;
  if(this.selectedCar == "plssel")
  {
alert(this.msg);
  }
  this.loadCompleted = false;
  if(this.selectedCar != "plssel")
  {
  this.showSpinner = true;
  }
    console.log("loadcompleted",this.loadCompleted);
    this.paramerter.sectorname = this.selectedCar;
    this.httpClientService.selectedSector(this.paramerter).subscribe(
    response => this.handleSuccessfulResponse(response));
 







};

saveRecomm()
{
  if(this.selectedCar == "plssel")
  {
alert(this.msg1);
  }

  console.log("dk",this.username_comp_fire);
  let i:number=0;
  for(let rec of this.recommstring)
  {
    this.keystats[i] = rec;
    this.keystats[i].username=this.username_comp_fire;

    i=i+1;
  }
  
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });


  console.log(this.keystats);
  
  this.httpClientService.saveRecomm(this.keystats).subscribe(
    response =>this.handleSuccessfulResponse1(response),);
            

}


  handleSuccessfulResponse1(response) {
    this.isSaved = response; //
    console.log("isSaved",this.isSaved);
  }

showGraph_X(shortname):any {
  //public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  console.log("shortname in showGraph",shortname);
  
  
   return this.httpClientService.showGraph(shortname).subscribe(
    response =>   this.handleSuccessfulResponse3(response)
    
    )["x-date"];
    //console.log("returned data by handle",this.handleSuccessfulResponse3(this.graphData));
    //return this.graphData ;
   
    //console.log("ks",shortname);
   


}

saveRow(shortname,mktcap,lastvalue,chg,percentchange,yearlyhigh,yearlylow,volume,fdayavgvol,todaysopen)
{


   this.httpClientService.saveRow(this.username_comp_fire,shortname,mktcap,lastvalue,chg,percentchange,yearlyhigh,yearlylow,volume,fdayavgvol,todaysopen).subscribe(
    response =>this.handleSuccessfulResponse2(response),);
    console.log("ks",this.keystats);

}
  handleSuccessfulResponse2(response) {

    this.isSavedRow = response;
    console.log("issr",this.isSavedRow);
   

  }

  handleSuccessfulResponse3(response) :any{
    console.log("response inside handle3",response);
    //this.graphData = response["x-date"];
    
    this.loadComponent=true;
    console.log("graphData inside handle3",this.graphData);
    //return this.graphData;
    
  }


 

    
}


/*export class ShowrecommComponent{
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}*/
