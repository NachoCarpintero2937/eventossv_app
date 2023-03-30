import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciales',
  templateUrl: './iniciales.component.html',
  styleUrls: ['./iniciales.component.scss'],
})
export class InicialesComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Input() paid!: number;
  @Input() background!: string;
  @Input() width: string = '32px';
  @Input() height: string = '32px';
  constructor() { }

  ngOnInit() { }



}
