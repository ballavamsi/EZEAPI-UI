import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';
import { LbdModule } from 'app/lbd/lbd.module';
import { LoginComponent } from 'app/login/login.component';
import { PreloginRoutes } from './prelogin-layout.routing';

@NgModule({
  imports: [
    RouterModule.forChild(PreloginRoutes),
  ],
  declarations: [
    LoginComponent
  ]
  })
  
  export class PreloginLayoutModule {}