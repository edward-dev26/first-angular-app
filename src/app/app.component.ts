import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from './app.validators';
import {TSwitchValue} from './components/switch/switch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  switch: TSwitchValue = 'on';

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        AppValidators.bannedEmail
      ], AppValidators.uniqEmail),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('')
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Value', this.form.value);
      this.form.reset();
    }
  }

  isInvalid(name: string) {
    return this.form.get(name).invalid && this.form.get(name).touched;
  }

  setCapital() {
    const cityMap = {
      ua: 'Kiev',
      ru: 'Moscow',
      by: 'Minsk'
    };

    const country = this.form.get('address').get('country').value;
    const city = cityMap[country];

    this.form.patchValue({
      address: {city}
    });
  }

  getSkillsControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  addSkillControl() {
    const control = new FormControl('', Validators.required);

    (this.form.get('skills') as FormArray).push(control);
  }
}
