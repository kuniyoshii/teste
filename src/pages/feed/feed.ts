import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})



export class FeedPage {
  
  public userName:string = "L from Code";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sumNumber(n1:number, n2:number): void{
    alert(n1+n2);
  }

  ionViewDidLoad() {
    //this.sumNumber(44,77);
  }

}
