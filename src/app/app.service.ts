import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }



public getPhotos() {
    return this._http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags="food"&api_key=eebc9a602056cd3955f0b51f3f135fb6&nojsoncallback=1&format=json&per_page=30');
}



}

