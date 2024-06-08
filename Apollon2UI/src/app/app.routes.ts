import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddTournamentComponent } from './components/add-tournament/add-tournament.component';

export const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'addTournament', component:AddTournamentComponent}
];
