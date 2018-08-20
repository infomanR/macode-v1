import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';
import { InicioComponent } from './front/container/inicio/inicio.component';
import { AcercaComponent } from './front/container/acerca/acerca.component';
import { backRoutes } from './back/back.routes';


//import { AdminImagesListComponent } from './back/admin-images-list/admin-images-list.component';
//import { DashboardComponent } from './back/dashboard/dashboard.component';


const appRoutes: Routes=[
	{ path: '', redirectTo: 'client', pathMatch: 'full' },

	{path: 'back', component: BackComponent, children: backRoutes},

	/*{path: 'back', component: BackComponent, children: [
		{path: '', redirectTo:'images', pathMatch: 'full'},
		{path: 'images', component: AdminImagesListComponent},
		{path: 'dashboard', component: DashboardComponent}
	]},*/
	
	{path: 'client', children:[
		{path: '', redirectTo:'front', pathMatch: 'full'},
		{path: 'front', component: FrontComponent,
			children: 	
			[
				{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
				{ path: 'inicio', component: InicioComponent },
				{ path: 'acerca', component: AcercaComponent }
			]
		}
	]}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes); 