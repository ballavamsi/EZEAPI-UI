import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { UserProjectsResponse, UserProjectsViewModel } from 'app/models/home';
import { HomeService } from '../services/home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


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
  constructor(public datepipe: DatePipe,
    private _homeService: HomeService,
    private router: Router,
    private _activateRoute: ActivatedRoute,
    private _spinnerService: NgxSpinnerService,) {
    this._spinnerService.show();
    this._activateRoute.params.subscribe((data) => {
      const routeId: string = data['id'];
      this._homeService.getUserProjects(routeId, 0, 2, false).subscribe((data: UserProjectsResponse) => {
        this._spinnerService.hide();
        if (data != null) {
          data.projects.forEach(item => {
            var newdate = new Date(item.createdDate);
            item.createdDate = this.datepipe.transform(newdate, 'dd MMM y');
          });
        }
        this.projectsData = data.projects;
        this.count = data.total;
        this.p = 1;
        this.tablecount = 5;
      },
      );
    });

  }

  ngOnInit() {

  }
  createProject() {
    this.router.navigate(['/create-project']);
  }
}
