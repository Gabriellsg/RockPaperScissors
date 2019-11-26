import { Component } from '@angular/core';
import { TournamentService } from './tournament.service';
import { Player } from './shared/Player.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scores = [0 , 0];

  players = ['Armando', 'Dave', 'Richard', 'Michael', 'Allen', 'Omer', 'David E.', 'Richard X.'];
  weapons = ['rock', 'paper', 'scissors'];
  dataTable: any[] = [];
  dataSource: any;


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
  this.players.forEach(element => {
    this.weapons.forEach(elem => {
      this.dataTable.push(
        {
          transferenciaDetalles: {
            name: element,
            weapon: elem,
          }
        });
    });
  });
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
