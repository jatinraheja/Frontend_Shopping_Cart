import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../authenticate.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   constructor(private loginservice : AuthenticateService) { }

  ngOnInit() {
  }

}
