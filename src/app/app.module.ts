import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
 MatToolbarModule, MatDialogModule, MatTableModule } from '@angular/material';
import { TournamentComponent } from './Modules/tournament/tournament.component';
import { MultiplayerComponent } from './Modules/multiplayer/multiplayer.component';
import { HeaderComponent } from './Modules/header/header.component';
import { ContentComponent } from './Modules/content/content.component';
import { FooterComponent } from './Modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    MultiplayerComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  entryComponents: [
    TournamentComponent,
    MultiplayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
