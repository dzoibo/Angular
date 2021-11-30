import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit 
{
  defaultOff:string ='éteint';
  constructor(private appareilService: AppareilService,private router: Router) { }
  onSubmit(form: NgForm) 
  {
    console.log(form.value);
    const name:string = form.value['name'];
    const status:string = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['appareils']);
  }
  ngOnInit(): void {
  }

}
