import { createElement, useState } from "react";


import { FlowChartContainerProps } from "../typings/FlowChartProps";

import "./ui/FlowChart.scss";

import { Observer } from "mobx-react";
import { Store } from "./store";
import { FlowChartComponent } from "./components/FlowChartComponent";


export default function FlowChart(props: FlowChartContainerProps) {
    console.log(props);

    const [store] = useState(new Store());

    return <Observer>{() => (
        <FlowChartComponent store={store} />
    )}</Observer>;
}
