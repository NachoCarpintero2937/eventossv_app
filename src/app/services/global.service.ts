import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  API_URL = "https://eventossv.com/ApiEventos/public/api/"
  // API_URL = "http://192.168.0.141/api/public/api/";
  public MONTH_SHORT_NAMES = "Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic";
  public DAY_SHORT_NAMES = "Dom, Lun, Mar, Mie, Jue, Vie, Sab";
}
