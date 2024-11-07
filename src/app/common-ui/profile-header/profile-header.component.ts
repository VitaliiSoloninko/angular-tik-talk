import { Component, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { imgUrlPipe } from '../../helpers/pipesimg-url.pipe';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [imgUrlPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile>();
}
