import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositories } from 'src/interfaces/Repositories';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  getRepositories(userName: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(
      `https://api.github.com/users/${userName}/repos`
    );
  }

  constructor(private http: HttpClient) {}
}
