import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-token',
  templateUrl: './project-token.component.html',
  styleUrls: ['./project-token.component.scss']
})
export class ProjectTokenComponent implements OnInit {

  constructor(private router: Router) { 
   }

  ngOnInit() {
  }

}
