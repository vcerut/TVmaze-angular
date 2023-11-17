import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { CastComponent } from './components/cast/cast.component';
import { GuestCastComponent } from './components/guest-cast/guest-cast.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [AppComponent, HomepageComponent, ShowDetailsComponent, NavbarComponent, GoBackButtonComponent, EpisodesComponent, CastComponent, GuestCastComponent, GalleryComponent, ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
