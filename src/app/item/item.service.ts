import { Injectable } from "@angular/core";

import { Item, Type} from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", type: Type.Artist },
        { id: 2, name: "Piqué", role: "Defender",  type: Type.Artist },
        { id: 3, name: "I. Rakitic", role: "Midfielder", type: Type.Artist  },
        { id: 4, name: "Sergio", role: "Midfielder", type: Type.Artist},
        { id: 5, name: "Denis Suárez", role: "Midfielder", type: Type.Artist},
        { id: 6, name: "Arda", role: "Midfielder", type: Type.Artist },
        { id: 7, name: "A. Iniesta", role: "Midfielder", type: Type.Artist},
        { id: 8, name: "Suárez", role: "Forward", type: Type.Artist },
        { id: 9, name: "Messi", role: "Forward", type: Type.Artist },
        { id: 10, name: "Neymar", role: "Forward", type: Type.Artist },
        { id: 11, name: "Rafinha", role: "Midfielder", type: Type.Soccer },
        { id: 12, name: "Cillessen", role: "Goalkeeper", type: Type.Soccer },
        { id: 13, name: "Mascherano", role: "Defender", type: Type.Soccer },
        { id: 14, name: "Paco Alcácer", role: "Forward", type: Type.Soccer },
        { id: 15, name: "Jordi Alba", role: "Defender", type: Type.Soccer },
        { id: 16, name: "Digne", role: "Defender", type: Type.Soccer },
        { id: 17, name: "Sergi Roberto", role: "Midfielder", type: Type.Soccer },
        { id: 18, name: "André Gomes", role: "Midfielder", type: Type.Soccer },
        { id: 19, name: "Aleix Vidal", role: "Midfielder", type: Type.Soccer },
        { id: 20, name: "Umtiti", role: "Defender", type: Type.Soccer },
        { id: 21, name: "Mathieu", role: "Defender", type: Type.Soccer },
        { id: 22, name: "Masip", role: "Goalkeeper", type: Type.Soccer }
    );

    // private artists = new Array<Item>(
    //     { id: 1, name: "Lealyn Eulin", role: "Singer" },
    //     { id: 2, name: "Mhemhe", role: "Dancer" },
    //     { id: 3, name: "Pong", role: "Paintor" },
    //     { id: 4, name: "Renan", role: "Dancer" },
    //     { id: 5, name: "Raymond", role: "Singer" },
    //     { id: 6, name: "Athan", role: "Actress" },
    //     { id: 8, name: "Monmon", role: "Actor" },
    //     { id: 9, name: "Mibel", role: "Singer" },
    //     { id: 10, name: "Cutie", role: "Actress" },
    //     { id: 11, name: "Angie", role: "Dancer" },
    //     { id: 12, name: "Ronnel", role: "Actor" },
    //     { id: 13, name: "Arth", role: "Singer" },
    //     { id: 14, name: "Gago", role: "Actor" },
    //     { id: 15, name: "Tarants", role: "Singer" },
    //     { id: 16, name: "Junmar", role: "Dancer" },
    //     { id: 17, name: "Belen", role: "Singer" },
    //     { id: 18, name: "Cute", role: "Dancer" },
    //     { id: 19, name: "John", role: "Actor" },
    //     { id: 20, name: "Carlo", role: "Dancer" },
    // );


    getItems(): Array<Item> {
        return this.items;
    }
    // getArtist() : Array<Item>{
    //     return this.artists
    // }

    // getArtist(type: string): Item {
    //     return 
    // }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
    getArtistSoccer (type){
        return this.items.filter((item) => item.type == type)

    }


}
