import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'zeros' })
export class ZerosPipe implements PipeTransform {

    transform(value: any, zeros: any): string {
        if (value && !isNaN(value)) {
            value = value + '';
            return value.length >= zeros ? value : new Array(zeros - value.length + 1).join('0') + value;
        } else if (value == 0) {
            return new Array(+zeros).join('0') + value;
        }

        return '';
    }
}