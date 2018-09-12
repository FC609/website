import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  values1 = '';
  constructor() { }

  ngOnInit() {
  }
onkey(event: KeyboardEvent) {
    console.log(event.key);
    this.values1 += (<HTMLInputElement>event.target).value + ' | ';
}
}
