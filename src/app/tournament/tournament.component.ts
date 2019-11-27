import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  scores = [0 , 0];
  playersTournment = [
    {name: 'Armando', weapon: 'P'},
    {name: 'Dave', weapon: 'S'},
    {name: 'Richard', weapon: 'R'},
    {name: 'Michael', weapon: 'S'},
    {name: 'Allen', weapon: 'S'},
    {name: 'Omer', weapon: 'P'},
    {name: 'David E.', weapon: 'R'},
    {name: 'Richard X.', weapon: 'P'}];

  displayedColumns = ['Player', 'Weapon', 'Winner'];
  solicitud: any;
  dataSource: MatTableDataSource<any>;
  dataTabla = [];
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();

    this.dataSource.data = this.playersTournment;
    console.log(this.dataSource.data);
  }
}
