import { Component, signal } from '@angular/core';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { DragAndDropDirective } from '../../../common-ui/directives/drag-and-drop.directive';

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [SvgIconComponent, DragAndDropDirective],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss',
})
export class AvatarUploadComponent {
  preview = signal<string>('assets/images/placeholder.png');

  fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (!file || !file.type.match('image')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.preview.set(event.target?.result?.toString() ?? '');
    };
    reader.readAsDataURL(file);
  }
}
