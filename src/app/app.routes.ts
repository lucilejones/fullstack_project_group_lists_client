import { Routes } from '@angular/router';
import { authGuard } from '../app/core/guards/auth.guard';
import { noAuthGuard } from '../app/core/guards/no-auth.guard';

export const routes: Routes = [

    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import('./features/dashboard/dashboard.component').then((c) => c.DashboardComponent),
        canActivate: [authGuard]
    },
    {
        path: "lists",
        loadComponent: () => import('./shared/components/lists/lists/lists.component').then((c) => c.ListsComponent),
        canActivate: [authGuard]
    },
    {
        path: "lists/:id",
        loadComponent: () => import('./shared/components/lists/list/list.component').then((c) => c.ListComponent),
        canActivate: [authGuard]
    },
    {
        path: "groups",
        loadComponent: () => import('./shared/components/groups/groups/groups.component').then((c) => c.GroupsComponent),
        canActivate: [authGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent),
        canActivate: [noAuthGuard]
    },
    {
        path: 'signup',
        loadComponent: () => import('./features/auth/signup/signup.component').then((c) => c.SignupComponent),
        canActivate: [noAuthGuard]
    }
];
