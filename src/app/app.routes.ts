import { Routes } from '@angular/router';
import { authGuard } from '../app/core/guards/auth.guard';
import { noAuthGuard } from '../app/core/guards/no-auth.guard';
import { ItemFormComponent } from './shared/components/items/item-form/item-form.component';
import { ListFormComponent } from './shared/components/lists/list-form/list-form.component';

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
        path: 'lists/add-list',
        loadComponent: () => import('./shared/components/lists/list-form/list-form.component').then((c) => c.ListFormComponent),
        canActivate: [authGuard]
    },
    {
        path: "lists/:id",
        loadComponent: () => import('./shared/components/lists/list/list.component').then((c) => c.ListComponent),
        canActivate: [authGuard],
        children: [

            {
                path: ':id/edit',
                component: ItemFormComponent,
                canActivate: [authGuard]
            }
        ]
    },
    {
        path: 'lists/:id/add-item',
        loadComponent: () => import('./shared/components/items/item-form/item-form.component').then((c) => c.ItemFormComponent),
        canActivate: [authGuard]
    },
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
        path: "groups/:id/invite-user",
        loadComponent: () => import('./shared/components/groups/invite-user-form/invite-user-form.component').then((c) => c.InviteUserFormComponent),
        canActivate: [authGuard]
    },
    {
        path: "invitations",
        loadComponent: () => import('./shared/components/invitations/invitations.component').then((c) => c.InvitationsComponent),
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
