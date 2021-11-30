import { Subject } from "rxjs-compat";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable() // permet d'injecter un service dans un autre service
export class AppareilService {
  
  appareilsSubject = new Subject <any[]>();
  constructor(private httpClient:HttpClient)
  {}
  
  private appareils = [
        {
          id:0,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id:1,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id:2,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
      addAppareil(name: string, status: string) 
      {
        const appareilObject = {
          id: 0,
          name: '',
          status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
      getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          }
        );
        return appareil;
    }
    emitAppareilSubject() {
      this.appareilsSubject.next(this.appareils.slice());
    }
  
  switchOnAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'allumé';
      }
      this.emitAppareilSubject();
  }
  
  switchOffAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'éteint';
        this.emitAppareilSubject();
      }
  }
  
  switchOnOne(i: number) {
      this.appareils[i].status = 'allumé';
      this.emitAppareilSubject();
  }
  
  switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
      this.emitAppareilSubject();
  }
  saveAppareilsToServer() {
    this.httpClient
      .put('https://dembele-9cc39-default-rtdb.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://dembele-9cc39-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
        console.log('recupération accomplie');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
}