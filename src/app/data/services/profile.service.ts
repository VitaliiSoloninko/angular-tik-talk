import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { Pageble } from '../interfaces/pageble.interface';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  me = signal<Profile | null>(null);

  constructor() {}

  getSubscribersShortList() {
    return this.http
      .get<Pageble<Profile>>(`${this.baseApiUrl}account/subscribers/`)
      .pipe(map((res) => res.items.slice(0, 3)));
  }

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`);
  }

  getMe() {
    return this.http
      .get<Profile>(`${this.baseApiUrl}account/me`)
      .pipe(map((res) => this.me.set(res)));
  }
}
