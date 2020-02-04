import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item';

@Component({
  selector: 'ns-soccerplayer',
  templateUrl: './soccerplayer.component.html',
  styleUrls: ['./soccerplayer.component.css']
})
export class SoccerplayerComponent implements OnInit {

    item : Array<Item>
    info: Item

  constructor(private service: ItemService) {}

  ngOnInit(): void{
     this.item = this.service.getItems()
  }

}
