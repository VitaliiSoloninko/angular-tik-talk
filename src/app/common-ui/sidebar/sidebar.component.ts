import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from '../../data/services/profile.service';
import { imgUrlPipe } from '../../helpers/pipesimg-url.pipe';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    NgFor,
    SubscriberCardComponent,
    RouterLink,
    AsyncPipe,
    JsonPipe,
    imgUrlPipe,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.me;

  menuItems = [
    {
      label: 'Login',
      icon: 'login',
      link: 'login',
    },
    {
      label: 'My page',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Chats',
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Search',
      icon: 'search',
      link: 'search',
    },
    {
      label: 'Settings',
      icon: 'settings',
      link: 'settings',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
