import { API_URL } from './app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './shared/Player.model';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  getAllActivesUrl = `${API_URL}/player`;

  constructor(private http: HttpClient) { }

  findAllActives(): Observable<Player[]> {
    return this.http.get<Player[]>(this.getAllActivesUrl);
  }
}
