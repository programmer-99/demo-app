import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }
  redirectToHome() {
    this._route.navigate(['/home'])
  }
  redirectToAbout(){
    this._route.navigate(['/about'])
  }
  redirectToContactUs(){
    this._route.navigate(['/contact'])
  }
  redirectToWork(){
    this._route.navigate(['/works'])
  }
}
