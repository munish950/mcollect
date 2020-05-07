import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material.module';
import { WatchlistComponent } from './watchlist.component';
import { watchlistReducer } from './store/watchlist.reducer';
import { WatchlistEffects } from './store/watchlist.effects';

const routes: Routes = [
    { path: '', component: WatchlistComponent}
];

@NgModule({
    declarations: [
        WatchlistComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('watchlist', watchlistReducer),
        EffectsModule.forFeature([WatchlistEffects])
    ]
})

export class WatchlistModule { }
