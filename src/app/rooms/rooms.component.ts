import { Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  name: string = 'pulasthi';

  hidden: boolean = false;

  rooms: Rooms = {
    avalibleRooms: 5,
    totalRooms: 10,
    bookedRooms: 2,
  };

  roomList: RoomList[] = [
    { price: 1500, roomType: 'no ac', roomNumber: 1 },
    { price: 2500, roomType: 'no ac', roomNumber: 2 },
    { price: 5000, roomType: ' ac', roomNumber: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}

  hide() {
    this.hidden = !this.hidden;
  }
}
