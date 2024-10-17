import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profile } from '../../../data/interfaces/profile.interface';
import { imgUrlPipe } from '../../../helpers/pipesimg-url.pipe';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [imgUrlPipe, RouterLink, SvgIconComponent],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
