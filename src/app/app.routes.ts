import { Routes } from '@angular/router';
import { AuthenticatorComponent } from './Pages/authenticator/authenticator.component';
import { SidebarComponent } from './UI/Shared-UI/sidebar/sidebar.component';
import { DashboardComponent } from './UI/Shared-UI/dashboard/dashboard.component';
import { UserComponent } from './UI/Shared-UI/user/user.component';

export const routes: Routes = [

  {path: ' ', redirectTo:'login', pathMatch:'full'},
{path: 'login', component: AuthenticatorComponent},

{path: '', component: SidebarComponent,

	children: [

	{path: 'dashboard', component: DashboardComponent},
	{path: 'users', component: UserComponent},

],


},


];

