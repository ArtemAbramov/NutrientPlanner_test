import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {IGithubResponse} from './interfaces/response.interface'

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  constructor(private http: HttpClient) {}

  getRepositories(name: string): Observable<IGithubResponse> {
    return this.http.get<IGithubResponse>(`https://api.github.com/search/repositories?q=${name}`)
  }
}
