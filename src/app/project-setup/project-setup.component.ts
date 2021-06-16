import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit {

  routeId :any;
  langId :any;
  description  ='';

   
  constructor(private router: Router,
    private _activateRoute: ActivatedRoute) {
    this._activateRoute.params.subscribe((data) => {
      this.routeId = data['routeId'];
      this.langId = data['langId'];
    });
  }

  ngOnInit() {

  }
}
