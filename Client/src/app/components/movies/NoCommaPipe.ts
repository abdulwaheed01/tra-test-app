import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComma'
})
export class NoCommaPipe implements PipeTransform {

  transform(val: number): string {
    if (val !== undefined && val !== null) {
      // here we just remove the commas from value
      return val.toString().replace(/,/g, `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`);
    } else {
      return "";
    }
  }
}