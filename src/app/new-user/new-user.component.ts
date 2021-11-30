import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from '../services/user.service';
import { User } from '../models/user.modele';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
 userForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:userService,private router:Router) { }

  ngOnInit(): void 
  {
    this.initForm();
  }
 /* initForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: ''
    });
  } On a retiré ceciparce que il faut ajouter des validators qui permettent de valider les données ; la nouvelle declaration ci-dessous inclut donc ces derniers*/
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([]) // On ajoute ceci 
    });
}

getHobbies(): FormArray {
  return this.userForm.get('hobbies') as FormArray;
}
onAddHobby() {
  const newHobbyControl = this.formBuilder.control(null, Validators.required);
  this.getHobbies().push(newHobbyControl);
}
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []// si le champs hobbie exxiste on retournera sa valeur; sinon on retournera null
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
}
