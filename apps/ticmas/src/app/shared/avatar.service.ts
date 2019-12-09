import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  getAvatar() {
    this.httpClient
      .get('https://ui-avatars.com/api/?size=128&name=Hernan&rounded=true')
      .subscribe(image => {});
  }
}
