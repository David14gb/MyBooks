import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reflibro'
})
export class ReflibroPipe implements PipeTransform {

  transform(value: string): string {

    let result:string;
    result= "Ref-" + value

    return result;
  }

}
