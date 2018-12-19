import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {

  public num = 0;
  public historic: number[] = [];

  public form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'min': [0, [Validators.required]],
      'max': [50, [Validators.required]],
    });
  }

  public randomNumber() {
    const { min, max } = this.form.value;

    this.num = this.random(min, max);
    this.saveHistoric();
  }

  private random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  private saveHistoric() {
    this.historic = [...this.historic, this.num];
  }

}
