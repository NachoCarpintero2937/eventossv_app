import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {

    transform(
        value: any,
        inputFormat: string = 'YYYY-MM-DD HH:mm:ss',
        outputFormat: string = 'DD/MM/YYYY HH:mm:ss'
    ): string {
        if (value) {
            let fecha = moment(value, inputFormat);
            if (fecha.isValid()) {
                return fecha.format(outputFormat);
            }
        }
        return value;
    }
}