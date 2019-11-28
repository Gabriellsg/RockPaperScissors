import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TournamentService } from 'src/app/shared/Services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  scores = [0 , 0];
  playersTournment = [
    [
      {name: 'Armando', weapon: 'P'},
      {name: 'Dave', weapon: 'S'},
    ],
    [
      {name: 'Richard', weapon: 'R'},
      {name: 'Michael', weapon: 'S'},
    ],
    [
      {name: 'Allen', weapon: 'S'},
      {name: 'Omer', weapon: 'P'},
    ],
    [
      {name: 'David E.', weapon: 'R'},
      {name: 'Richard X.', weapon: 'P'}
    ]
  ];

  displayedColumns = ['Player1', 'WeaponPlayer1', 'vs', 'WeaponPlayer2', 'Player2' ];
  solicitud: any;
  dataSource: MatTableDataSource<any>;
  dataTabla = [];
  playerWinner = { Name: null, Weapon: null};
  constructor(private service: TournamentService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();

    this.dataSource.data = this.playersTournment;
  }

  ResultTournment() {
    this.service.rps_tournament_winner(this.playersTournment).subscribe(resp => {
      if (resp) {
        resp.forEach(element => {
          this.playerWinner.Name = element.name;
          this.playerWinner.Weapon = element.weapon;
        });
      }
    });
  }
}
