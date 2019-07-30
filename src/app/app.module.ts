import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimestampService } from './service/timestampService';
import { ColorService } from './service/colorService';

import { ColorPickerPage } from './module/color-picker/color-picker.page';
import { ColorPickerPageModule } from './module/color-picker/color-picker.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ColorPickerPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'TimeControllerDB',
      driverOrder: ['sqlite', 'websql', 'indexeddb'],
    }),
    AppRoutingModule,
    ColorPickerPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TimestampService,
    ColorService,
    ColorPickerPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
