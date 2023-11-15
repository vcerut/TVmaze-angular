import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { CastComponent } from './components/cast/cast.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
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
