import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { UserProjectsResponse, UserProjectsViewModel } from 'app/models/home';
import { HomeService } from '../services/home/home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projectsData: UserProjectsViewModel[];
  @Input() count: number;
  @Input() p: number;
  @Input() tablecount: number;
  constructor(public datepipe: DatePipe,private _homeService: HomeService,private router: Router) { }

  ngOnInit() {
    this._homeService.getUserProjects(1,0,2,false).subscribe((data: UserProjectsResponse) => {
      if(data != null)
      {
        data.projects.forEach(item => {
         var newdate = new Date(item.createdDate);
         item.createdDate = this.datepipe.transform(newdate, 'dd MMM y');
        });
      }
      this.projectsData = data.projects;
      this.count = data.total;
      this.p =1;
      this.tablecount = 5;
    },
  );
 }
 createProject() {
  this.router.navigate(['/create-project']);
}
}
