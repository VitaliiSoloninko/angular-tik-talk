import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[DragAndDrop]',
  standalone: true,
})
export class DragAndDropDirective {
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    console.log(event);
  }
}
