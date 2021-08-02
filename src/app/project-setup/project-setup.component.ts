import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  projectconfigurationform: FormGroup;

   
  constructor(private router: Router,
    private _activateRoute: ActivatedRoute) {
      this.projectconfigurationform = new FormGroup({
        server: new FormControl(''),
        port: new FormControl(''),
        user: new FormControl(''),
        password: new FormControl(''),
        database: new FormControl('')
      });
  }

  ngOnInit() {

  }
}
