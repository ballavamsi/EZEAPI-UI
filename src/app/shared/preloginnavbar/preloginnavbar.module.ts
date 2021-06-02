import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreloginNavbarComponent } from './preloginnavbar.component';

@NgModule({
    imports: [ RouterModule ],
    declarations: [ PreloginNavbarComponent ],
    exports: [ PreloginNavbarComponent ]
})

export class PreloginNavbarModule {}
