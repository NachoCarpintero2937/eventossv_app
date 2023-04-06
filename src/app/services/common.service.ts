import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public closeModal: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
