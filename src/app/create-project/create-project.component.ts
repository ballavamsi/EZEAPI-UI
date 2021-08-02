import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProjectsResponse } from 'app/models/home';
import { createProjectResponse} from 'app/models/User';
import { HomeService } from 'app/services/home/home.service';
import { StorageService } from 'app/services/storage/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  public langId: any;
  projectform: FormGroup;
  newProjectsResponse: createProjectResponse;

  constructor(private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _spinnerService: NgxSpinnerService,
    private _homeService: HomeService,
    private _storageService: StorageService) { 
      this.projectform = new FormGroup({
        name: new FormControl(''),
        description: new FormControl('')
      });

      
   }

  ngOnInit() {
    
  }

  get getProjectName() {
    return this.projectform.get('name').value;
  }

  get getProjectDescription() {
    return this.projectform.get('description').value;
  }

  
  createUserProject() {
    this._spinnerService.show();
    var userDetails = this._storageService.getUserSessionDetails();
    this._homeService.createUserProject(userDetails?.user.id,this.langId).subscribe(
      result => {
        const returnData: createProjectResponse = result;
        this.newProjectsResponse = returnData;
        this._spinnerService.hide();
        this._router.navigate([`project-setup`]);
      },
      error => {
        this._spinnerService.hide();
      });
  }

  onSubmit() {
    this.createUserProject();
  }

}
