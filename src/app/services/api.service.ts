import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _globalSv: GlobalService,
    private _http: HttpClient) { }

  public async _getAction(model: any, action_name: string) {
    const options = {
      params: model
    }
    const get = this._http.get(
      this._globalSv.API_URL + action_name, options
    );
    return await lastValueFrom(get);

  }
  public async _postAction(model: any, action_name: string) {
    const options = model
    const post = this._http.post(
      this._globalSv.API_URL + action_name, options
    );
    return await lastValueFrom(post);

  }

  public get(method: string, model?: any) {
    return this._getAction(model, method)
  }
  public post(method: string, model?: any) {
    return this._postAction(model, method)
  }
}
