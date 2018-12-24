import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
  name: 'Upper'
})

export class UpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
