import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CreateProjectComponent } from '../../create-project/create-project.component';
import { CreateAPIComponent } from '../../create-api/create-api.component';
import { HomeAPIComponent } from '../../home-api/home-api.component';
import { ProjectDetailsComponent } from '../../project-details/project-details.component';
import { ProjectSetupComponent } from '../../project-setup/project-setup.component';
import { ProjectTokenComponent } from '../../project-token/project-token.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'create-project', component: CreateProjectComponent},
    { path: 'create-api', component: CreateAPIComponent},
    { path: 'home-api', component: HomeAPIComponent},
    { path: 'project-details', component: ProjectDetailsComponent},
    { path: 'project-setup', component: ProjectSetupComponent},
    { path: 'project-token', component: ProjectTokenComponent}
];
