import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PreloginFooterComponent } from './preloginfooter.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ PreloginFooterComponent ],
    exports: [ PreloginFooterComponent ]
})

export class PreloginFooterModule {}
