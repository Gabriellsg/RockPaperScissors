import { Component, OnInit } from '@angular/core';
import { Player } from './Models/Player.model';
import { MatDialog } from '@angular/material';
import { TournamentService } from './shared/Services/tournament.service';
import { TournamentComponent } from './Modules/tournament/tournament.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  constructor() { }
  }

