import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControlContainer } from '@angular/forms';
@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {


  formData = [];
  constructor(private httpClient: HttpClient) {
    // this.httpClient.get('/assets/vPlayerData.json').subscribe(res => {
    //   this.formData.push(res);
    // })
    // console.log("data----", this.formData)
   
  }
  data = [
    {

      "title": "Sony 4K",

      "link": "https://www.youtube.com/watch?v=xcJtL7QggTI",

      "description": "Sony 4K video to another world",

      "status": "Active",

      "platform": "YouTube"
    }
  ]
  ngOnInit(): void {
    console.log("inside init----", this.getUrlId());
    this.getUrlId()
  }
  getUrlId() {
    this.formData = this.data;
    // console.log("inside get url----", this.formData[0].link)
    let url = this.formData[0].link
    var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    var match = url.match(regExp);
    return (match && match[1].length == 11) ? match[1] : false;
  }
}
