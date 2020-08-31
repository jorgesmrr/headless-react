import { FunctionComponent } from "react";

export interface ToolbarItemProps {

    title: string;

    link?: string;

}

declare const ToolbarItem: FunctionComponent<ToolbarItemProps>;

export default ToolbarItem;

