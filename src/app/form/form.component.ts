import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  interpolation: ['{{', '}}'],
})
export class FormComponent implements OnInit {
  title = 'Form component';
  text = 'My sample text';
  number = '42';
  frameworks = ['angular', 'react', 'vue'];
  versions = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  };

  // form: FormGroup = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   dateOfBirth: new FormControl('', Validators.required),
  //   framework: new FormControl('', Validators.required),
  //   version: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   hobbies: new FormControl('', Validators.required),
  // });
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      framework: '',
      version: '',
    });

    // this.form.valueChanges.subscribe(console.log(this.form.value));
  }

  changeTitle() {
    this.title = 'title has been changed';
  }

  handleChange(key: string) {
    console.log(this.form.value[key]);
  }

  change(event: any) {
    console.log(event);
  }

}
