import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
pet:any;
  constructor(private streaming:StreamingMedia) {
    this.statVideo();

  }
  ionViewWillEnter() {
    this.pet ='kittens';

  }

  statVideo(){
let option:StreamingVideoOptions={
  successCallback:()=>{console.log()},
  errorCallback:()=>{console.log()},
  orientation:''
}
    this.streaming.playVideo('https://wowzaprod148-i.akamaihd.net/hls/live/584453/e3db5fa6/playlist.m3u8',option);

  }

}
