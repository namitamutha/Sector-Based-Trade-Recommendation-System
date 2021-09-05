import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocateService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authentocateService.logOut();
    this.router.navigate(['']);
  }

}
