import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventModel } from '../../shared/event-model';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Loading } from 'ionic-angular/components/loading/loading';

@IonicPage()
@Component({
  selector: 'page-event-manager',
  templateUrl: 'event-manager.html',
})
export class EventManagerPage {

  newEventModel: EventModel = new EventModel();
  isNewEvent: boolean = true;
  buttonLabel: string;
  choosedFile: any;
  storage: any;
  eventKeyList: object[] = [
    {key: 'name', label: "Név"},
    {key: 'date', label: "Dátum"},
    {key: 'pictureURL', label: "Kép"},
    {key: 'description', label: "Leírás"}
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventServiceProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
      this.storage = firebase.storage().ref();
      this.buttonLabel = "létrehozás";
      if (this.navParams.data.baseEvent) {
        this.isNewEvent = false;
        this.buttonLabel = "frissítés";
        this.newEventModel = new EventModel(
          this.navParams.data.baseEvent
        );
        this.newEventModel.date = moment(this.newEventModel.date).toISOString();
      }
  }

  saveNewEvent() {
    let message = this.isNewEvent ? "Esemény létrehozva" : "Esemény frissítve";
    this.eventService.save(this.newEventModel)
      .forEach( response => {
        this.presentToast(message, () => {
          this.navCtrl.pop();
        });
      });
  }

  presentToast(message: string, callBack: any = null, position: string = 'top') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.onDidDismiss(() => {
      if (callBack) {
        callBack();
      }
    });

    toast.present();
  }

  /**
   * Documentation: https://firebase.google.com/docs/storage/web/upload-files
   * @param event
   */
  fileChoosed(event) {
    let loading: Loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Kérem várjon, amíg a kép feltöltése befejeződik'
    });
    let file = event.currentTarget.files[0];
    var reader  = new window['FileReader']();


    reader.onloadend = () => {
      // Set store url.
      let storageRef = this.storage.child(`images/events/${file.name}`);

      // Upload file content.
      storageRef.put(file)
        .then( snapshot => {
          this.newEventModel.pictureURL = snapshot.downloadURL;
          loading.dismiss();
        })
        .catch( error => {
          console.error(error);
          loading.dismiss();
        });
    };

    if (file) {
      loading.present();
      reader.readAsDataURL(file);
    }
    // http://www.fortitudemagazine.co.uk/wp-content/uploads/2017/04/sziget_og_image.jpg
  }

}
