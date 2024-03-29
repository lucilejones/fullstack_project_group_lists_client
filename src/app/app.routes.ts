import { Routes } from '@angular/router';
import { authGuard } from '../app/core/guards/auth.guard';
import { noAuthGuard } from '../app/core/guards/no-auth.guard';
import { ItemFormComponent } from './shared/components/items/item-form/item-form.component';

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
        canActivate: [authGuard],
    },
    {
        path: "lists/:id",
        loadComponent: () => import('./shared/components/lists/list/list.component').then((c) => c.ListComponent),
        canActivate: [authGuard],
        children: [
            {
                path: 'add-item',
                component: ItemFormComponent
            }
        ]
    },
    // {
    //     path: "add-item",
    //     loadComponent: () => import('./shared/components/items/add-item/add-item.component').then((c) => c.AddItemComponent),
    //     canActivate: [authGuard]
    // },
    {
        path: "items/:id",
        loadComponent: () => import('./shared/components/items/item/item.component').then((c) => c.ItemComponent),
        canActivate: [authGuard]
    },
    {
        path: "groups",
        loadComponent: () => import('./shared/components/groups/groups/groups.component').then((c) => c.GroupsComponent),
        canActivate: [authGuard]
    },
    {
        path: "groups/:id",
        loadComponent: () => import('./shared/components/groups/group/group.component').then((c) => c.GroupComponent),
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
