import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZerosPipe } from '../transforms/zeros.pipe';
import { FormatDatePipe } from '../transforms/format-date.pipe';
import { BooleanTraductorPipe } from '../transforms/boolean-traductor.pipe';
import { InicialesPipe } from '../transforms/iniciales.pipe';
import { IonicModule } from '@ionic/angular';

const pipes = [
    ZerosPipe,
    FormatDatePipe,
    BooleanTraductorPipe,
    InicialesPipe,
];

@NgModule({
    declarations: [
        ...pipes
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ...pipes
    ],
    providers: [
        ...pipes
    ]
})
export class PipesModule { }
