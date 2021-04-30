import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// form : FormGroup = new FormGroup({
//   "firstName": new FormControl("", Validators.required),
//   "lastName": new FormControl("", Validators.required),
//   "dateOfBirth": new FormControl("", Validators.required),
//   "framework": new FormControl("", Validators.required),
//   "version": new FormControl("", Validators.required),
//   "email": new FormControl("", [Validators.email, Validators.required]),
//   "hobbies": new FormControl("", Validators.required),
// });
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {}
