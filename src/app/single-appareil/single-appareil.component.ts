import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name:string="appareil";
  status:string="statut";
  constructor(private appareilService: AppareilService ,private route: ActivatedRoute) { }

  
    ngOnInit() {
      const id = this.route.snapshot.params['id'];
      const appareil = this.appareilService.getAppareilById(+id);
      if(appareil) {
          this.name = appareil.name;
          this.status = appareil.status;
      } else {
          // ici appareil et `null`
          // l'id n'existe pas.
      }
  }
  
  
}
