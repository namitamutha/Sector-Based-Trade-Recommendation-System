import { Component, OnInit } from '@angular/core';
import { UserFire, HttpClientService } from '../service/http-client.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
@Component({
  selector: 'app-recommsaved',
  templateUrl: './recommsaved.component.html',
  styleUrls: ['./recommsaved.component.css']
})
export class RecommsavedComponent implements OnInit {

  headElement=["S.No","TimeStamp","SHORTNAME","MKTCAP","LAST   VALUE","CHANGE","CHANGE IN %","YEARLY  HIGH","YEARLY  LOW","VOLUME","5 DAYS AVG VOL","TODAYS OPEN",""];
  mysavedrecom:[];
  savedrecommTS:[];
  loadCompleted:boolean = false;
  showSpinner:boolean=true;
  selectedTS:string="All";
  un:string="";
  flagTS:number=0;
  isDel:number=0;
  isEmptySaved:boolean=false;

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {

    this.httpClientService.getMySavedRecomm().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );


  }
  handleSuccessfulResponse(response)
  {
      this.mysavedrecom =response;
      if(this.mysavedrecom.length==0)
      {
      this.isEmptySaved=true
      }
      console.log("Es",this.isEmptySaved)

      this.loadCompleted = true;
      this.showSpinner=false;

  }
  handleSuccessfulResponse1(response)
  {
    this.savedrecommTS=response;
    this.flagTS=1;
  }

GoFilter()
{
  
  //console.log("gof");
  this.un=sessionStorage.getItem('username');
  
  this.httpClientService.GoFilter(this.un, this.selectedTS).subscribe(
    response =>this.handleSuccessfulResponse1(response),);



}

Delrow(timestamp1,shortname)
{
//console.log("ts",timestamp1,"sn",shortname);
  this.un = sessionStorage.getItem('username');
this.httpClientService.Delrow(this.un,timestamp1,shortname).subscribe(
  response =>this.handleSuccessfulResponse2(response),);

}

DelAll()
{
  this.un = sessionStorage.getItem('username');
  this.httpClientService.DelAll(this.un).subscribe(
    response =>this.handleSuccessfulResponse2(response),);

}
  handleSuccessfulResponse2(response) {
    this.isDel=response;
    console.log(response);

  }

  refresh(): void {
    window.location.reload();
}





}