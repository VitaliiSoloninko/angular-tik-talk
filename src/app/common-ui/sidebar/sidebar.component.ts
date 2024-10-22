import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, NgFor, SubscriberCardComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  menuItems = [
    {
      label: 'My page',
      icon: 'home',
      link: '',
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
  ];
}
