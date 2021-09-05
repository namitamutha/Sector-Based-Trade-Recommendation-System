import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  logOut() {
    sessionStorage.removeItem('username');
  }

  constructor() { }
/*
  authenticate(username, password) {
    if (username === "ayesha@stockify.com" && password === "12345") {
      sessionStorage.setItem('username', username)
      return true;
    }
    else if (username === "usha@stockify.com" && password === "1234") {
      sessionStorage.setItem('username', username)
      return true;
    }
    
    else {
      return false;
    }
}*/
authenticate(username, password,isUser) {
  //console.log("un,",username,"psswd",password)
  if (isUser==1) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    return true;
    
  }
  else{
    return false;
  }
  }
 


/*
isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}*/

isUserLoggedIn() {
  let username = sessionStorage.getItem('username')
  //console.log(!(username === null))
  return !(username === null)


}
}