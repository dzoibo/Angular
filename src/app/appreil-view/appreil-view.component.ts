import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appreil-view',
  templateUrl: './appreil-view.component.html',
  styleUrls: ['./appreil-view.component.scss']
})
export class AppreilViewComponent implements OnInit {
 appareils:any[''];
  isAuth=false;
    lastUpdate: Promise<Date> = new Promise(
      (resolve, reject) => {
        const date = new Date();
        setTimeout(
          () => {
            resolve(date);
          }, 500
        );
      }
    );
     

    
    constructor(private appareilService:AppareilService) {
      setTimeout(()=> {this.isAuth=true;} ,4000
      );
    }
    ngOnInit() {
      this.appareils=this.appareilService.appareils;

    }
    onAllumer() {
      console.log('On allume tout !');
      this.appareilService.switchOnAll();
  }
  onEteindre() {
    console.log('On eteint tout !');
    this.appareilService.switchOffAll();
  }
}
