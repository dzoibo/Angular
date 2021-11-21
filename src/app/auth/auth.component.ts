import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
 authStatus: Boolean =false;
  constructor( private authService:AuthService,private router:Router) 
  { 
    
  }

  ngOnInit() 
  {
    this.authStatus=this.authService.isAuth;
  }
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );// ici on utilise then() parce que c'est notre fonction signIn() est asynchrone , then nous permet d'executer le code une fois la promise résolue
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }


}
