import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ItemService } from "~/app/item/item.service";
import { Item } from "~/app/item/item";
import { EventData } from "tns-core-modules/data/observable";
import { TextView } from "tns-core-modules/ui/text-view";

@Component({
    selector: "ns-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
    @Input() store: Item;
    @Output() editEvent = new EventEmitter();
    name : string
    constructor() {}

    ngOnInit() {}

    submit() {
        this.editEvent.emit(this.store);
    }
}
