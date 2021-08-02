import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { UserProjectsResponse, UserProjectsViewModel } from 'app/models/home';
import { HomeService } from '../services/home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from 'app/services/storage/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projectsData: UserProjectsViewModel[];
  @Input() count: number;
  @Input() p: number;
  @Input() tablecount: number;
  projectform: FormGroup;
  constructor(public datepipe: DatePipe,
    private _homeService: HomeService,
    private router: Router,
    private _activateRoute: ActivatedRoute,
    private _spinnerService: NgxSpinnerService,
    private _storageService: StorageService) {
  //  this._spinnerService.show();
    this.projectform = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    this.getUserProjectsDetails();
  }
  createProject() {
    this.router.navigate(['/create-project']);
  }
  onSubmit() {
    console.log();
  }

  getUserProjectsDetails(){

    var userDetails = this._storageService.getUserSessionDetails();
    const routeId: string = userDetails?.user.id;

    this._homeService.getUserProjects(routeId, 0, 10, false).subscribe((data: UserProjectsResponse) => {
    //  this._spinnerService.hide();
      if (data != null) {
        data.projects.forEach(item => {
          var newdate = new Date(item.createdDate);
          item.createdDate = this.datepipe.transform(newdate, 'dd MMM y');
        });
      }
      this.projectsData = data.projects;
      this.count = data.total;
      this.p = 1;
      this.tablecount = 10;
    },
    );
  }

}
