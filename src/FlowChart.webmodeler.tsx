import { Component, ReactNode, createElement } from "react";
import { FlowChartContainerProps, FlowChartPreviewProps } from "../typings/FlowChartProps";

declare function require(name: string): string;

export class preview extends Component<FlowChartPreviewProps> {
    render(): ReactNode {
        return <div>No preview available</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/FlowChart.scss");
}
type VisibilityMap = {
    [P in keyof FlowChartContainerProps]: boolean;
};


export function getVisibleProperties(props: FlowChartContainerProps, visibilityMap: VisibilityMap): VisibilityMap {
    console.log(props);

    // visibilityMap.nodeConstraint = props.nodeDataSource === "xpath";
    // visibilityMap.nodeGetDataMicroflow = props.nodeDataSource === "microflow";
    // visibilityMap.nodeGetDataNanoflow = props.nodeDataSource === "nanoflow";

    return visibilityMap;
}