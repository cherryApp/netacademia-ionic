import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventManagerPage } from './event-manager';

@NgModule({
  declarations: [
    EventManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(EventManagerPage),
  ],
})
export class EventManagerPageModule {}
