import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  API_URL = "https://event-back.pigtureit.com/public/api/"
  constructor() { }
}
