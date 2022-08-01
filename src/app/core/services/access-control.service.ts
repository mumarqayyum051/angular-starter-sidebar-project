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

  getPermissions(id: any): Observable<any> {
    return this.apiService.get(`/users/getPermissions/${id}`);
  }
  deleteUser(id: any): Observable<any> {
    return this.apiService.delete(`/users/delete/${id}`);
  }
  updateUser(data: any, id: any): Observable<any> {
    return this.apiService.put(`/users/update/${id}`, data);
  }
}
