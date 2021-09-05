import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { strict } from 'assert';

/*
export class User{
  constructor(
    public userId:string,
    public name:string,
   
  ) {}
}*/

export class UserFire
{
constructor(
  public username:string,
  public password:string,
  ){}

}

export class Parameters{
constructor(
  public sectorname:string,

){}
}

export class KeyStats{
constructor(
  public username:string,public shortname:string,public mktcap:string,public lastvalue:string,public chg:string,public percentchange:string,public yearlyhigh:string,public yearlylow:string,public volume:string,public fdayavgvol:string,public todaysopen:string,public timestamp1:string,public timestamp_to_display:string){}


}


export class Nifty50
{
  constructor(
    public id: string,

	private shortname:string,
	
	private mktcap:string,

	private lastval:string,
	
	private change:string,
	
	private percentagechange:string,
	
	private direction:string,
	
	private volume:string,
   
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 
  


  constructor(
    private httpClient:HttpClient
  ) { 
     }
    public un:string;
    
/*

  getUsers()
  {
    console.log("test call");
    return this.httpClient.get<User[]>('http://localhost:8080/users1');
  }*/

  getNifty50()
  {
    console.log("test call");
    return this.httpClient.get<Nifty50[]>('http://localhost:8080/showNifty');
  }
  
  
  /*
  public deleteUser(user) {
    return this.httpClient.delete<User>("http://localhost:8080/users" + "/"+ user.userId);
  }*/
/*
  public createUser(user) {
    return this.httpClient.post<User>("http://localhost:8080/users1", user);
  }*/

  selectedSector(parameter) {
    let params = new HttpParams();
    params = params.append('sectorname', parameter.sectorname);
    
    console.log(parameter);
   return this.httpClient.get<String>("http://localhost:8080/getRecommendation",{params});
  // return this.httpClient.get<String>("http://localhost:8080/getRecommendation", {params}).subscribe(data =>{alert("sector selected successfully.")});
  
  }

  checkLogin_fire(UserFire)
  {
    let params = new HttpParams();
    params = params.append('username', UserFire.username);
    params = params.append('password', UserFire.password);
    console.log(UserFire);
    return this.httpClient.get<String>("http://localhost:8080/loginfire",{params});
  }

  saveRecomm(KeyStats)
  {
    console.log("yay",KeyStats)
    return this.httpClient.post<KeyStats>("http://localhost:8080/saveRecomm", KeyStats);
  }

  getMySavedRecomm() {
    let params = new HttpParams();
    this.un=sessionStorage.getItem('username');
    params = params.append('username', this.un);
    params = params.append('timespanSelected', "All");
  console.log("username: ",this.un);

    return this.httpClient.get<String[]>('http://localhost:8080/getSavedRecomm',{params});
  }

  SignUp(UserFire)
  {
    let params = new HttpParams();
    params = params.append('username', UserFire.username);
    params = params.append('password', UserFire.password);
    console.log(UserFire)
    return this.httpClient.get<String>("http://localhost:8080/createUser",{params});
    
  }

  GoFilter(un,selectedTS)
  {
    let params = new HttpParams();
    params = params.append('username',un);
    params = params.append('timespanSelected',selectedTS);

    console.log("timest :",selectedTS);

    return this.httpClient.get<String[]>('http://localhost:8080/getSavedRecomm',{params});

  }

  Delrow(username,timestamp1,shortname)
  {
    let params = new HttpParams();

    params = params.append('username',username);
    params = params.append('timestamp1',timestamp1);
    params = params.append('shortname',shortname);


    return this.httpClient.get<String[]>('http://localhost:8080/deleteSavedRecomm',{params});
  }

  DelAll(un)
  {
    let params = new HttpParams();
    params = params.append('username',un);
    return this.httpClient.get<String[]>('http://localhost:8080/deleteAllSavedRecomm',{params});




  }

  saveRow(un,shortname,mktcap,lastvalue,chg,percentchange,yearlyhigh,yearlylow,volume,fdayavgvol,todaysopen)
  {
    let params = new HttpParams();
    params = params.append('username',un);
    params = params.append('shortname',shortname);
    params = params.append('mktcap',mktcap);

    params = params.append('lastvalue',lastvalue);

    params = params.append('chg',chg);

    params = params.append('percentchange',percentchange);

    params = params.append('yearlyhigh',yearlyhigh);

    params = params.append('yearlylow',yearlylow);

    params = params.append('volume',volume);

    params = params.append('fdayavgvol',fdayavgvol);

    params = params.append('todaysopen',todaysopen);

    params = params.append('timestamp1',"");

    params = params.append('timestamp_to_display',"");


    return this.httpClient.get<String[]>('http://localhost:8080/saveSelectedRecomm',{params});

    




  }


  showGraph(shortname) {

    let params = new HttpParams();
    params = params.append('stockName',shortname);
    return this.httpClient.get<String>('http://localhost:8080/showGraph',{params});
  }
 
 


}



