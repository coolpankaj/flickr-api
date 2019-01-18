import { Component, OnInit } from '@angular/core';
import { AppService } from "./../app.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public photos

  constructor(public router: Router, public appService: AppService) { }

  ngOnInit() {
    this.getPhotosByApi()
  }

  public getPhotosByApi() {
    this.appService.getPhotos().subscribe(apiResponse => {
     
      let data = apiResponse
     this.photos = data.photos.photo
     console.log(this.photos)  
    // console.log(data)    
    })
  }

}
