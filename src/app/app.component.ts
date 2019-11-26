import { Component } from '@angular/core';
import { TournamentService } from './tournament.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scores = [0 , 0];
  weapons = ['rock', 'paper', 'scissors'];

  players = [
    {
      name: 'Armando',
      weapon: 'P'
    },
    {
      name: 'Dave',
      weapon: 'S'
    },
    {
      name: 'Richard',
      weapon: 'R'
    },
    {
      name: 'Michael',
      weapon: 'S'
    },
  ];

  playerSelected = -1;


  isResultShow = false;

  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0;
  enemySelected  = -1;

  constructor(
    private service: TournamentService,
  ) { }



 loadData() {
  this.service.findAllActives();
 }

 populateGrid() {

 }

 reset(): void {
   this.scores = [0, 0];
 }

 checkResult(): void {
   const playerPick = this.playerSelected;
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
