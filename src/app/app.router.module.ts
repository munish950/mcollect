import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
        .then(a => a.AuthModule)
    },
    { path: 'profile', component: ProfileComponent },
    {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module')
        .then(m => m.GalleryModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRouteModule {}
