import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Item, Type } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    @Input() artistSoccer: Type;
    items: Array<Item>;
    item: Item;
    choice: boolean

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        console.log(this.artistSoccer)
        if (this.artistSoccer != undefined) {
            this.choice = false;
            this.items = this.itemService.getArtistSoccer(this.artistSoccer)
        } else {
            this.choice = true;
            this.items = this.itemService.getItems()
        }

        // this.item = {
        //     id: 0,
        //     name: "",
        //     role: "",
        //     type: ""
        // }
        // this.items = this.itemService.getItems();
    }

    add(data) {
        var obj = {
            id: this.items.length + 1,
            name: data.name,
            role: data.role,
            type: data.type
        }
        this.items.push(obj)
        
    }

}
