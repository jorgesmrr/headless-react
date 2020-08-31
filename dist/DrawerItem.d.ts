import { FunctionComponent } from "react";

export interface DrawerItemProps {

    title: string;

    link?: string;

}

declare const DrawerItem: FunctionComponent<DrawerItemProps>;

export default DrawerItem;

