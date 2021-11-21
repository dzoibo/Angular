import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
