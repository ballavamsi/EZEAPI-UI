import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-api',
  templateUrl: './home-api.component.html',
  styleUrls: ['./home-api.component.scss']
})
export class HomeAPIComponent implements OnInit {

  constructor(private router: Router) { 
   }

  ngOnInit() {
  }

}
