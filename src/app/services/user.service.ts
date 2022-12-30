import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.github.com/users';

  getUser(userName: string | undefined | null): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userName}`);
  }

  constructor(private http: HttpClient) {}
}
