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
    // store : Item;
    name = ""
    role = ""
    @Output() editEvent = new EventEmitter();
    constructor() {}

    ngOnInit() {
    }

    submit() {
        let obj = {
            name: this.name,
            role: this.role,
        }
        this.editEvent.emit(obj);
    }
}
