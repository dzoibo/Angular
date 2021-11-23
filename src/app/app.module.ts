import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppreilViewComponent } from './appreil-view/appreil-view.component';
import{SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {RouterModule,Routes} from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'appareils',canActivate: [AuthGuard], component: AppreilViewComponent},
  { path: 'appareils/:id',canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppreilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    AppareilComponent,
    AuthComponent,
    AppreilViewComponent,
    FourOhFourComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
