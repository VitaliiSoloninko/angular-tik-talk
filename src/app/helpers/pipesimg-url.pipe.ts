import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true,
})
export class imgUrlPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (!value) return null;
    return `https://icherniakov.ru/yt-course/${value}`;
  }
}