import { Component, OnInit } from '@angular/core';
import { TournamentService } from './tournament.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  scores = [0 , 0];
  weaponSelected = 0;
  weapons = ['rock', 'paper', 'scissors'];
  response;
  objetoSorteado: [];
  players = []
  playersSelected = [];
  playerOne = { name: null, weapon: null};
  playerTwo = { name: null, weapon: null};;
  // playerSelected = -1;

  isResultShow = false;

  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0;
  enemySelected  = -1;

  ngOnInit() {
  }

  constructor(
    private service: TournamentService,
  ) { }

  loadData() {
    this.clear();
    this.populatePlayers();

    this.players.forEach(element => {
      const randomNum =  Math.floor(Math.random() * 3 );
      element.weapon = randomNum;
    });

    for (let index = 0; index < 2; index++) {
      this.playersSelected.push(this.players[Math.floor(Math.random() * this.players.length)]);
    }
    this.rps_game_winner_load(this.playersSelected)
  }

  rps_game_winner_load(listSend) {
    this.playersSelected.forEach(element => {
      if (this.playerOne == null) {
        this.playerOne = element.name;
      } else {
        this.playerTwo = element.name;
      } 
    });
    this.playerOne = this.playersSelected[0];
    this.playerTwo = this.playersSelected[1]
    console.log(this.playerOne, this.playerTwo)
    this.service.rps_game_winner(listSend).subscribe(resp => {
      console.log(resp)
      this.response = resp;
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
    this.players = []
    this.playersSelected = []
  }

 populateGrid() {

 }

 reset(): void {
   this.scores = [0, 0];
 }

 checkResult(): void {
  //  const playerPick = this.playerSelected;
  const playerPick = null;
   const enemyPick = this.enemySelected;
  // if you and the enemy have the same weapon, then it is a tie.
   if ( playerPick ===  enemyPick) {
    this.theResult = 2;
  } else if ( (playerPick - enemyPick + 3) % 3 === 1)    {
      // YOU WIN
      this.theResult = 0;
      this.scores[0] = this.scores[0] + 1;
    } else {
      // YOU LOSE
      this.theResult = 1;
      this.scores[1] = this.scores[1] + 1;
    }
 }
}
