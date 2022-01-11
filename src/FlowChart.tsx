import { createElement, useEffect, useState } from "react";


import { FlowChartContainerProps } from "../typings/FlowChartProps";

import "./ui/FlowChart.scss";

import { Observer } from "mobx-react";
import { Store } from "./store";
import { FlowChartComponent } from "./components/FlowChartComponent";
import { useUnmount } from "ahooks";

const parseStyle = (style = ""): { [key: string]: string } => {
    try {
        return style.split(";").reduce<{ [key: string]: string }>((styleObject, line) => {
            const pair = line.split(":");
            if (pair.length === 2) {
                const name = pair[0].trim().replace(/(-.)/g, match => match[1].toUpperCase());
                styleObject[name] = pair[1].trim();
            }
            return styleObject;
        }, {});
    } catch (_) {
        return {};
    }
};


export default function FlowChart(props: FlowChartContainerProps) {
    const [store] = useState(new Store(props));

    useEffect(() => {
        store._mxOption = props;
        return () => {
        }
    }, [props])

    useUnmount(() => {
        store.dispose();
    })

    return <Observer>{() => (
        <div className="mxcn-resize-wrapper" style={parseStyle(props.style)}>
            <FlowChartComponent store={store} />
        </div>
    )}</Observer>;
}
