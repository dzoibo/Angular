import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit 
{

  @Input() appareilName: string="yo";
  @Input() appareilIndex:number=-1;
  @Input() appareilStatus: string = 'éteint';
  @Input() appareilId:number=-1;
  
  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
  getColor()
  {
    if (this.appareilStatus==='allumé')
    {
      return 'green';
    }
    else
    {
      return 'red';
    }
  } 
  onSwitchOff() {
    
      this.appareilService.switchOffOne(this.appareilIndex);
  }
  onSwitchOn() {
    
    this.appareilService.switchOnOne(this.appareilIndex);
}

}

