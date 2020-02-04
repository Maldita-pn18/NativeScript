import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {

    item: Item;
    name: string
    id: number
    role = "GoalKeeper"
    number = 0
    show : boolean
    info : Item[] = []
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) {}y6

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    onTap() {
        this.number++
    }
    decre(){
        this.number--
    }

    update(data){
        this.show = true
        this.id = data.id
        this.name = data.name
        this.role = data.role
    }
}
