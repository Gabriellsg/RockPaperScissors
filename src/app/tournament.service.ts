import { API_URL } from './app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './shared/Player.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  RSP_GAME_WINNER_API = `${API_URL}/rps_game_winner`;

  constructor(private http: HttpClient) {}

  // rps_game_winner(ListOfPlayers): Observable<any> {
  //   console.log('get', ListOfPlayers);
  //   return this.http.get<any>(this.RSP_GAME_WINNER_API, ListOfPlayers);
  // }

  rps_game_winner(objSalidas: any[]): Observable<any> {
    return this.http.post<any>(this.RSP_GAME_WINNER_API, objSalidas);
  }
}
