import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  name: string = 'pulasthi';

  hidden: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  hide() {
    this.hidden = !this.hidden;
  }
}
