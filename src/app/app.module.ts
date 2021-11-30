import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';/*ces deux importations permettent respectivement d'utiliser la methode reactive et la methode reactive sur les formulaires*/ 

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
import { userService } from './services/user.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'appareils',canActivate: [AuthGuard], component: AppreilViewComponent},
  { path: 'appareils/:id',canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '',canActivate: [AuthGuard], component: AppreilViewComponent },
  { path: 'users',canActivate: [AuthGuard], component: UserListComponent },
  { path: 'newuser',canActivate: [AuthGuard], component: NewUserComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];
@NgModule({
  declarations: [ /*chaque componnent de mon application une fois importé doit etre ajouté dans cet array*/
    AppComponent,
    FirstCompoComponent,
    AppareilComponent,
    AuthComponent,
    AppreilViewComponent,
    FourOhFourComponent,
    SingleAppareilComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent 
  ],
  imports: [ /*ici on ajoute les importations des fichiers natifs de angulars*/
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [/*ici on ajoute les services crée */
    AppareilService,AuthService,AuthGuard,userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
