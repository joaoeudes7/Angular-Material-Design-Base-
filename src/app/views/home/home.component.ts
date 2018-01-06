import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {random} from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public num: number;
  public min: number;
  public max: number;

  historic = [];
  options: FormGroup;

  constructor(fb: FormBuilder) {

    this.num = 0;
    this.min = 0;
    this.max = 50;

    this.options = fb.group({
      'min': [this.min, [Validators.required]],
      'max': [this.max, [Validators.required]],
    });
  }

public random(): void {
    this.num = random(this.min, this.max);
    this.historic.push(this.num);
    this.historic = this.historic.slice();
  }

}
