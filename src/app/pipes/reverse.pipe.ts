import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(ch: string): string {
    let reverse = '';
    for (let i = 0; i < ch.length; i++) {
      reverse = ch[i] + reverse;
    }
    return reverse;
  }

  // let result = '';
  //   for (let i = ch.length - 1; i >= 0; i--) {
  //     result += ch[i];
  //   }
  //   return result;
  // }
}
