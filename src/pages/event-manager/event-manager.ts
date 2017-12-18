import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventModel } from '../../shared/event-model';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import * as moment from 'moment';
import { FileChooser } from '@ionic-native/file-chooser';
import { ElementRef } from '@angular/core/src/linker/element_ref';

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
    public fileChooser: FileChooser) {
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

  fileChoosed() {
    let chooser = document.querySelector("#native-file-chooser");
    let file = chooser.files[0];
    alert(file);
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      console.log(reader.result);
      this.newEventModel.pictureURL = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
    // http://www.fortitudemagazine.co.uk/wp-content/uploads/2017/04/sziget_og_image.jpg
  }

}
