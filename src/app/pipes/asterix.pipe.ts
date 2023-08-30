import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let vowels: any = ['a', 'e', 'y', 'u', 'i', 'o', 'A', 'E', 'Y', 'U', 'I', 'O'];
    let result : string = '';

    for (let i = 0; i < ch.length; i++) {
      let isReplaced: boolean = true;
      for (let j = 0; j < vowels.length; j++) {
        if (vowels[j] == ch[i]) {
          isReplaced = false;
          result = result + '*';
          break;
        }
      }
      if (isReplaced) {
        result += ch[i];

      }

    }
    return result;
  }

}
