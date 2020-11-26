import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AuthGuardService } from '../auth-guard.service';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const pokemonsRoutes: Routes = [
    {
        path: 'pokemon',
        canActivate: [AuthGuardService],
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }