import { Routes } from '@angular/router';
import { canActivateAuth } from './auth/access.guard';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'profile/me', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'profile/:id', component: ProfilePageComponent },
      { path: 'settings', component: SettingsPageComponent },
      { path: 'chats', component: ChatsPageComponent },
    ],
    canActivate: [canActivateAuth],
  },
];
