import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import('./features/dashboard/dashboard.component').then((c) => c.DashboardComponent)
    },
    {
        path: "lists",
        pathMatch: "full",
        loadComponent: () => import('./shared/components/lists/lists/lists.component').then((c) => c.ListsComponent)
    },
    {
        path: "groups",
        pathMatch: "full",
        loadComponent: () => import('./shared/components/groups/groups/groups.component').then((c) => c.GroupsComponent)
    }
];
