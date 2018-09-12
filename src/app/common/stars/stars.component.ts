import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  star = 5;

  @Output()
  public event: EventEmitter<number> = new EventEmitter();

  public  stars = [true, true, true, true, true];
  constructor() { }

  ngOnInit() {
  }

  handleStarNum(star) {
    this.event.emit(star);
  }
}
