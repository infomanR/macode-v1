import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminImagesListComponent } from './admin-images-list/admin-images-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminImageCreateComponent } from './admin-image-create/admin-image-create.component';

export const backRoutes: Routes=[
	{path: '', redirectTo:'images', pathMatch: 'full'},
	{path: 'images', component: AdminImagesListComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'create', component: AdminImageCreateComponent}
];

//export const bRoutes:ModuleWithProviders = RouterModule.forRoot(backRoutes); 