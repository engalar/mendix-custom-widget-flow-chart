/**
 * This file was generated from FlowChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    tabIndex: number;

    uniqueid: string;
    friendlyId?: string;
    mxform: mxui.lib.form._FormBase;
    mxObject?: mendix.lib.MxObject;
    readOnly: boolean;
    style: string;
}

interface _W {
    bg: string; // "MyFirstModule.BackgroundImage"
    bgFilter: string; // "[MyFirstModule.BackgroundImage_WorkflowDummy/MyFirstModule.WorkflowDummy/MyFirstModule.WorkflowInstanceDummy_WorkflowDummy='[%CurrentObject%]']"
    roi: string; // "MyFirstModule.Entity"
    roiFilter: string; // "[MyFirstModule.Entity_UserTaskDummy/MyFirstModule.UserTaskDummy/MyFirstModule.UserTaskDummy_WorkflowInstanceDummy='[%CurrentObject%]']"
    x: string;
    y: string;
    xOfBg: string;
    yOfBg: string;
    widthOfBg: string;
    heightOfBg: string;
    hlIcon: string;
}

export interface FlowChartContainerProps extends CommonProps, _W {}

export interface FlowChartPreviewProps extends _W {
    class: string;
    style: string;
    styleObject: CSSProperties;
}

export interface VisibilityMap {
    [P in _W]: boolean;
}
