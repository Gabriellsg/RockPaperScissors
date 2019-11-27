import { Component, OnInit } from '@angular/core';
import { TournamentService } from './tournament.service';
import { Player } from './shared/Player.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  scores = [0 , 0];
  playersTournment = ['Armando', 'Dave', 'Richard', 'Michael', 'Allen', 'Omer', 'David E.', 'Richard X.'];
  weapons = ['rock', 'paper', 'scissors'];
  dataTable: any[] = [];
  dataSource: any;
  playerWinner = { Name: null, Weapon: null};
  theResult = false;
  firstWin = false;
  newItem: any;
  weaponSelected = 0;
  response;
  objetoSorteado: [];
  players = [];
  playersSelected = [];
  playerOne = { name: null, weapon: null};
  playerTwo = { name: null, weapon: null};

  ngOnInit() {
  }

  constructor( private service: TournamentService ) { }

  loadData() {
    this.clear();
    this.populatePlayers();

    this.players.forEach(element => {
      const randomNum =  Math.floor(Math.random() * 3 );
      element.weapon = randomNum;
    });

    this.validateElementsEquals();

    this.playersSelected.forEach(element => {
      if (this.playerOne == null) {
        this.playerOne = element.name;
      } else {
        this.playerTwo = element.name;
      }
    });

    this.rps_game_winner_load(this.playersSelected);
  }

  rps_game_winner_load(listSend) {
    const playerWinner = new Player();
    this.convertToListString(listSend);

    this.playerOne = this.playersSelected[0];
    this.playerTwo = this.playersSelected[1];

    this.service.rps_game_winner(listSend).subscribe(resp => {
      if (resp) {
        this.theResult = true;
        resp.forEach(element => {
          playerWinner.Name = element.name;
          playerWinner.Weapon = element.weapon;
          if (this.playerOne.name === element.name) {
            this.firstWin = true;
            this.scores[0] = this.scores[0] + 1;
          } else {
            this.firstWin = false;
            this.scores[1] = this.scores[1] + 1;
          }
        });
      }
    });
  }

  validateElementsEquals() {
    for (let index = 0; index < 2; index++) {
      while (this.playersSelected.length < 2) {
        if (this.playersSelected.length === 0) {
          this.playersSelected.push(this.players[Math.floor(Math.random() * this.players.length)]);
        } else {
          this.newItem = this.players[Math.floor(Math.random() * this.players.length)];
          if (this.playersSelected.indexOf(this.newItem) === -1) {
            this.playersSelected.push(this.newItem);
          } else {
            continue;
          }
        }
      }
    }
  }

  convertToListString(listOfPlayers) {
    listOfPlayers.forEach(element => {
      if (element.weapon === 0) {
        element.weapon = 'R';
      } else if (element.weapon === 1) {
        element.weapon = 'P';
      } else {
        element.weapon = 'S';
      }
    });
  }

  populatePlayers() {
    this.players = [
      { name: 'Armando', weapon: null },
      { name: 'Dave', weapon: null },
      { name: 'Richard', weapon: null },
      { name: 'Michael', weapon: null},
    ];
  }

  clear() {
    this.players = [];
    this.playersSelected = [];
    this.scores = [0 , 0];

  }
}
