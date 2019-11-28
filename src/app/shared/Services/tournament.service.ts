import { API_URL } from 'src/app/app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  RSP_GAME_WINNER_API = `${API_URL}/rps_game_winner`;
  RSP_GAME_TOURNAMENT_API = `${API_URL}/rps_tournament_winner`;

  constructor(private http: HttpClient) {}

  rps_game_winner(listPlayer: any[]): Observable<any> {
    return this.http.post<any>(this.RSP_GAME_WINNER_API, listPlayer);
  }

  rps_tournament_winner(listPlayer: any[]): Observable<any> {
    return this.http.post<any>(this.RSP_GAME_TOURNAMENT_API, listPlayer);
  }
}
