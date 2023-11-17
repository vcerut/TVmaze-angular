import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { CastComponent } from './components/cast/cast.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchShowsComponent } from './components/search-shows/search-shows.component';
import { SearchPeopleComponent } from './components/search-people/search-people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'searchshow', component: SearchShowsComponent },
  { path: 'searchpeople', component: SearchPeopleComponent },
  { path: 'people/:id', component: PeopleDetailsComponent},
  { path: 'details/:id', component: ShowDetailsComponent },
  { path: 'episodes/:id', component: EpisodesComponent },
  { path: 'cast/:id', component: CastComponent },
  { path: 'gallery/:id', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
