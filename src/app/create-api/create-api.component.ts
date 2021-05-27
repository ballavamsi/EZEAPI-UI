import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-api',
  templateUrl: './create-api.component.html',
  styleUrls: ['./create-api.component.scss']
})
export class CreateAPIComponent implements OnInit {

  constructor(private router: Router) { 
   }

  ngOnInit() {
  }

}
