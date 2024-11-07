import { Component, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me') return toObservable(this.profileService.me);

      return this.profileService.getAccount(id);
    })
  );
}
