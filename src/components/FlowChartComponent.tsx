import { createElement, useEffect, useRef } from "react";
import { Observer } from "mobx-react";
import { Store } from "../store";

import { Graph } from "@antv/x6";
import { Alert } from "antd";
export interface FlowChartComponentProps {
    store: Store;
}


export function FlowChartComponent(props: FlowChartComponentProps) {
    const graphRef = useRef<any>();

    useEffect(() => {
        const readOnly = props.store._mxOption.readOnly;
        const graph: Graph = new Graph({
            container: graphRef.current,
            connecting: {
                router: 'orth',
            },
            autoResize: true,
            panning: false,
            interacting: {
                edgeMovable: false,
                nodeMovable: !readOnly,
            },
        });
        graph.on('node:moved', e => {
            console.log(e.x - 10, e.y - 10);
        })

        props.store.graph = graph;
    }, []);
    return <Observer>{() => (
        props.store.isImageEntity ? <div className="mxcn-resize" ref={graphRef}></div> : <Alert
            message="Error"
            description="背景图片实体必须继承System.Image"
            type="error"
            showIcon
        />
    )}</Observer>;
}

