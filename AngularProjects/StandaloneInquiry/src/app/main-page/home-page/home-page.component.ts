import { Component, OnInit } from '@angular/core';
import { TellerRouteHolder } from '../dto/TellerRoutes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fillerNav = new TellerRouteHolder().routes;
  constructor() { }

  ngOnInit() {
  }

}
