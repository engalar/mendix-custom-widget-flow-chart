import { when } from "mobx";
import { Store } from "..";
import { BaseMxObject } from "./BaseMxObject";

export class OptionItem extends BaseMxObject {
    constructor(guid: string, public store: Store) {
        super(guid);

        when(
            () => !!this.store.graph,
            () => {
                this.store.graph!.addNode({
                    shape: "image",
                    x: Number(this.mxObject.get(this.store._mxOption.xOfBg)),
                    y: Number(this.mxObject.get(this.store._mxOption.yOfBg)),
                    width: Number(this.mxObject.get(this.store._mxOption.widthOfBg)),
                    height: Number(this.mxObject.get(this.store._mxOption.heightOfBg)),
                    imageUrl: `./file?guid=${this.mxObject.getGuid()}`,
                    zIndex: 0
                });
            }
        );
    }
}
export class Roi extends BaseMxObject {
    constructor(guid: string, public store: Store) {
        super(guid);

        when(
            () => !!this.store.graph,
            () => {
                this.store.graph!.addNode({
                    shape: "image",
                    x: Number(this.mxObject.get(store._mxOption.x)),
                    y: Number(this.mxObject.get(store._mxOption.y)),
                    width: 20,
                    height: 20,
                    imageUrl: this.store._mxOption.hlIcon,
                    zIndex: 2
                });
            }
        );
    }
}
