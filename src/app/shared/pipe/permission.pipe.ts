import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permission',
})
export class PermissionPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value != 0 || value != 1) return;

    return null;
  }
}
