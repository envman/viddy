import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numTrunc'})
export class NumberTruncatePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    if(!isNaN(value)) {
      const number = Number.parseInt(value)
      const abs = Math.abs( number )

      if ( abs >= Math.pow( 10, 12 ) ) {
        value = ( number / Math.pow( 10, 12 ) ).toFixed( 1 ) + "T"
      } else if ( abs < Math.pow( 10, 12 ) && abs >= Math.pow( 10, 9 ) ) {
        value = ( number / Math.pow( 10, 9 ) ).toFixed( 1 ) + "B"
      } else if ( abs < Math.pow( 10, 9 ) && abs >= Math.pow( 10, 6 ) ) {
        value = ( number / Math.pow( 10, 6 ) ).toFixed( 1 ) + "M"
      } else if ( abs < Math.pow( 10, 6 ) && abs >= Math.pow( 10, 3 ) ) {
        value = ( number / Math.pow( 10, 3 ) ).toFixed( 1 ) + "K"
      }

      return value
    }

    return value
  }
}
