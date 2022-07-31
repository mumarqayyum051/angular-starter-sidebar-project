import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  constructor(private apiService: ApiService) {}

  createUser(data: any): Observable<any> {
    return this.apiService.post('/users/create', data);
  }
}
