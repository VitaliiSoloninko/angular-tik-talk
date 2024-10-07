import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { imgUrlPipe } from '../../helpers/pipesimg-url.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [imgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
