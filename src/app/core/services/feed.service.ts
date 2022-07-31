import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private apiService: ApiService) {}

  createPost(data: any): Observable<any> {
    return this.apiService.post('/feed/createPost', data);
  }
}
