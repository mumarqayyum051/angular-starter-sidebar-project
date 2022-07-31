import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private apiService: ApiService) {}

  createPost(data: any) {
    this.apiService.post('/feed/createPost', data);
  }
}
