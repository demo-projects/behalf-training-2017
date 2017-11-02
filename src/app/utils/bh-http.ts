import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export class BhHttp {
  private _http: HttpClient;
  private _uid: string;

  constructor(uid: string, http: HttpClient) {
    this._uid = uid;
    this._http = http;
  }

  get() {
    this._http.get('');
  }


}
