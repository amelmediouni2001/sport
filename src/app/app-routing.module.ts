import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SearchComponent } from './search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { CalculImcComponent } from './components/calcul-imc/calcul-imc.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  // http://localhost:4200/ => HomeComponent will be displayed
  {path:"", component: HomeComponent},
    // http://localhost:4200/signin => LoginComponent will be displayed
  {path:"signin", component: LoginComponent},
    // http://localhost:4200/subscription => SignupComponent will be displayed
  {path:"subscription", component: SignupComponent},
  {path:"adminSubscription", component: SignupComponent},
  {path:"matches", component:MatchesComponent},
  {path:"players", component:PlayersComponent},
  {path:"addPlayer", component:AddPlayerComponent},
  {path:"addMatch", component:AddMatchComponent},
  {path:"addTeam", component:AddTeamComponent},
  {path:"admin", component:AdminComponent},
  // id is a param matchInfo =page on click Display match
  {path:"matchInfo/:id", component:MatchInfoComponent},
  {path:"editMatch", component:EditMatchComponent},
  // id is a param teamInfo =page on click Display info
  {path:"teamInfo/:id", component:TeamInfoComponent},
  {path:"editTeam", component:EditTeamComponent},
  // id is a param playerInfo =page on click Display player
  {path:"playerInfo/:id", component:PlayerInfoComponent}, 
  {path:"editPlayer", component:EditPlayerComponent},
  {path:"teams", component:TeamsComponent},
  {path:"search", component:SearchComponent},
  {path:"addStadium", component:AddStadiumComponent},
  {path:"stadiumInfo/:id", component:StadiumInfoComponent},
  {path:"searchTeamStadium", component:SearchTeamStadiumComponent},
  {path:"searchPlayer", component:SearchPlayerComponent},
  {path:"calculIMC", component:CalculImcComponent},
  {path:"weather", component:WeatherComponent},
 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
