import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { PreloginNavbarModule } from './shared/preloginnavbar/preloginnavbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { PreloginFooterModule } from './shared/preloginfooter/preloginfooter.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PreloginComponent } from './layouts/prelogin-layout/prelogin-layout.component';
import { PreloginLayoutModule } from './layouts/prelogin-layout/prelogin-layout.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    PreloginNavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    PreloginLayoutModule,
    PreloginFooterModule

  ],
  declarations: [
    AppComponent,
    PreloginComponent,
    AdminLayoutComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
