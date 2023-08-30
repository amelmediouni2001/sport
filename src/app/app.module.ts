import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TestDragAndDropComponent } from './components/test-drag-and-drop/test-drag-and-drop.component';
import { PlayersComponent } from './components/players/players.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchsTableComponent } from './components/matchs-table/matchs-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { SingleTeamComponent } from './components/single-team/single-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchComponent } from './search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsTabComponent } from './components/stadiums-tab/stadiums-tab.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SingleStadiumComponent } from './components/single-stadium/single-stadium.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { CalculImcComponent } from './components/calcul-imc/calcul-imc.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    ArticleComponent,
    MatchesComponent,
    TestDragAndDropComponent,
    PlayersComponent,
    SinglePlayerComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchsTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    EditMatchComponent,
    TeamInfoComponent,
    EditTeamComponent,
    PlayerInfoComponent,
    EditPlayerComponent,
    TeamsComponent,
    TeamComponent,
    SingleTeamComponent,
    BannerComponent,
    AsterixPipe,
    ReversePipe,
    SearchComponent,
    AddStadiumComponent,
    StadiumsTabComponent,
    StadiumInfoComponent,
    SingleStadiumComponent,
    SearchTeamStadiumComponent,
    SearchPlayerComponent,
    CalculImcComponent,
    WeatherComponent,
    FilterPipePipe,
    
  ],
  // cest le module qui demarre le projet sur le navigateur et synchronise les infos entre d'angular et le navigateur
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
