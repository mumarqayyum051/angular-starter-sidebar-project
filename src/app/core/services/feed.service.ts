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

  getAllPosts(): Observable<any> {
    return this.apiService.get('/feed/getAllPosts');
  }

  onPostAction(data: any, actionType: any): Observable<any> {
    return this.apiService.post(`/feed/${actionType}`, data);
  }
  onPostDelete(id: any): Observable<any> {
    return this.apiService.delete(`/feed/deletePost/${id}`);
  }
  onPostUpdate(data: any, id: any): Observable<any> {
    return this.apiService.put(`/feed/updatePost/${id}`, data);
  }
}
