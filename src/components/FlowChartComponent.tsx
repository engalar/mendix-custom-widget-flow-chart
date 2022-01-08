import { createElement, useEffect, useRef } from "react";
import { Observer } from "mobx-react";
import { Store } from "../store";

import { Graph } from "@antv/x6";
export interface FlowChartComponentProps {
    store: Store;
}


export function FlowChartComponent(props: FlowChartComponentProps) {
    console.log(props);
    const graphRef = useRef<any>();

    useEffect(() => {
        const graph: Graph = new Graph({
            container: graphRef.current,
            connecting: {
                router: 'orth',
            },
            autoResize: true,
            panning: false,
            interacting: {
                edgeMovable: false,
                nodeMovable: true,
            },
        });

        graph.addNode({
            shape: 'image',
            x: 320,
            y: 120,
            width: 94,
            height: 28,
            imageUrl:
                'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg',
        })

        graph.addNode({
            x: 520, y: 170
        });
    }, []);
    return <Observer>{() => (
        <div className="mxcn-resize" ref={graphRef}></div>
    )}</Observer>;
}

