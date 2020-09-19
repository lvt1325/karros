import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KMaterialModule } from './material-module';
import { KarrosHeaderComponent } from './karros-header/karros-header.component';
import { KarrosPanelComponent } from './karros-panel/karros-panel.component';
import { KarrosFooterComponent } from './karros-footer/karros-footer.component';
import { KarrosRatingComponent } from './karros-rating/karros-rating.component';
import { KarrosMovieCardComponent } from './karros-movie-card/karros-movie-card.component';
import { KarrosLoadingComponent } from './karros-loading/karros-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    KarrosHeaderComponent,
    KarrosPanelComponent,
    KarrosFooterComponent,
    KarrosRatingComponent,
    KarrosMovieCardComponent,
    KarrosLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
