import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // API_URL = "https://eventossv.com/ApiEventos/public/api/"
  API_URL = "http://192.168.0.141/api/public/api/"
  constructor() { }
}
