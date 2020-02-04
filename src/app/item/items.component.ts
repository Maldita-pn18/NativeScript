import { Component, OnInit , Input, Output, EventEmitter} from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    item : Item

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.item = {
            id: 0,
            name: "",
            role: "",
            type: ""
        }
        this.items = this.itemService.getItems();
    }

    add(data){
        var obj = {
            id: this.items.length + 1,
            name: data.name,
            role: data.role,
            type: data.type
        }
        this.items.push(obj)
    }

}
