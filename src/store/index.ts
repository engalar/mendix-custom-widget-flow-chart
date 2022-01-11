import { Graph } from "@antv/x6";
import { entityIsImage, fetchByXpath, getReferencePart } from "@jeltemx/mendix-react-widget-utils";
import { configure, flow, makeObservable, observable, when } from "mobx";
import { FlowChartContainerProps } from "../../typings/FlowChartProps";
import { OptionItem, Roi } from "./objects/OptionItem";

configure({ enforceActions: "observed", isolateGlobalState: true, useProxies: "never" });

export class Store {
    /**
     * dispose
     */
    public dispose() {
        this.bgObjItem?.dispose();
        this.roiList.forEach(d => d.dispose());
    }

    _mxOption: FlowChartContainerProps;

    isImageEntity = false;
    bgObjItem?: OptionItem;
    roiList: Roi[] = [];
    graph?: Graph;

    constructor(mxOption: FlowChartContainerProps) {
        const bgEntity = getReferencePart(mxOption.bg, "entity");
        this._mxOption = mxOption;
        if (entityIsImage(bgEntity ? bgEntity : mxOption.bg)) {
            this.isImageEntity = true;
            makeObservable(this, {
                loadBackGround: flow.bound,
                loadRoi: flow.bound,
                _mxOption: observable,
                bgObjItem: observable,
                graph: observable,
                roiList: observable
            });
            when(
                () => this._mxOption.mxObject != undefined,
                () => {
                    this.loadBackGround();
                    this.loadRoi();
                }
            );
        }
    }

    *loadBackGround() {
        const bgEntity = getReferencePart(this._mxOption.bg, "entity");
        const objs: mendix.lib.MxObject[] = yield fetchByXpath(
            this._mxOption.mxObject!,
            bgEntity ? bgEntity : this._mxOption.bg,
            bgEntity ? this._mxOption.bgFilter.replace(`'[%CurrentObject%]'`, this._mxOption.mxObject!.getGuid()) : ""
        );

        if (objs) {
            this.bgObjItem = new OptionItem(objs[0].getGuid(), this);
        } else {
            console.error("背景图无法获取");
        }
    }

    *loadRoi() {
        const roiEntity = getReferencePart(this._mxOption.roi, "entity");
        const objs: mendix.lib.MxObject[] = yield fetchByXpath(
            this._mxOption.mxObject!,
            roiEntity ? roiEntity : this._mxOption.roi,
            roiEntity ? this._mxOption.roiFilter.replace(`'[%CurrentObject%]'`, this._mxOption.mxObject!.getGuid()) : ""
        );

        if (objs) {
            this.roiList = objs.map(d => new Roi(d.getGuid(), this));
        } else {
            console.error("ROI无法获取");
        }
    }
}
