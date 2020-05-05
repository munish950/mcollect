import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
        .then(a => a.AuthModule)
    },
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
