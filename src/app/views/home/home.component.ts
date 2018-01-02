import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.options = fb.group({
      'min': [this.min, [Validators.min(0), Validators.required]],
      'max': [this.max, [Validators.min(2), Validators.max(99999), Validators.required]],
    });

    this.num = 0;
    this.min = 0;
    this.max = 50;
  }

public random(): void {
    alert('oi');
    // this.num =  Math.floor(Math.random() * this.max) + this.min as number;
    // this.historic.push(this.num);
    alert('oi');
  }
}
