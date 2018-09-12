import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  public clickMessage = '';
  public clickMessage2 = '';
  clicks = 1;
  constructor() { }

  ngOnInit() {
  }
  onClickMe() {
    this.clickMessage = 'You are my hero!-----显示数据';
  }
  onClickMe2(event: any) {
    const   evtMsg = event ? ' 操作对象是' + event.target.tagName  : '';
    this.clickMessage2 = (`点击了${this.clicks++}次. ${evtMsg}`);
  }
}
