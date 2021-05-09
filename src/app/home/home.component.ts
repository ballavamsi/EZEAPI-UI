import { Component, Input, OnInit } from '@angular/core';
import { UserProjectsViewModel } from 'app/models/home';
import { HomeService } from '../services/home/home.service';
import { Router } from '@angular/router';
import { OverlayService } from '../overlay/overlay.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projectsData: UserProjectsViewModel[];
  @Input() count: number;
  constructor(private _homeService: HomeService,private router: Router,private _overlayService: OverlayService) { }

  ngOnInit() {

    this._overlayService.show();
    this._homeService.getUserProjects(1).subscribe((data: UserProjectsViewModel[]) => {
      this.projectsData = data;
      this.count = data.length;
      this._overlayService.hide();
    },
  );
 }
 createProject() {
  this.router.navigate(['/create-project']);
}
}
