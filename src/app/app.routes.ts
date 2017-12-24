import { LazyComponent } from './shared/components/lazy/lazy.component';
import { HomeComponent } from './shared/components/home/home.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lazy', component: LazyComponent }
];


// const routes: Routes = [
//     { path: '', loadChildren: './shared/components/home/home.module#HomeModule' },
//     { path: 'lazy', loadChildren: './shared/components/lazy/lazy.module#LazyModule' }
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);