import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: './modules/layout/layout.module#LayoutModule',
    },
];
