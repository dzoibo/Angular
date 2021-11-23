import { Component,OnInit,OnDestroy } from '@angular/core';
import { Observable }         from 'rxjs-compat';
import { interval }           from 'rxjs';
import { Subscription }       from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy
{
  secondes:number=-1;
  counterSubscription !: Subscription;
    constructor(){}
    ngOnInit()
    {
      const counter = Observable.interval(1000);
      this.counterSubscription=counter.subscribe({
        next: (value:number) => this.secondes = value})
    }
    ngOnDestroy()
    {
      this.counterSubscription.unsubscribe();
    }

}
