import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'booleanTraductor' })
export class BooleanTraductorPipe implements PipeTransform {
    transform(value: any) {
        return ((+value) ? 'Si' : 'No');
    }
}