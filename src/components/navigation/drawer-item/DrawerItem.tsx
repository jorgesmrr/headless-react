import React, { FunctionComponent } from "react";

export interface DrawerItemProps {
  title: string;
  link?: string;
}

const DrawerItem: FunctionComponent<DrawerItemProps> = ({ title, link }) => (
  <li className="drawer-item">
    <a className="block px-4 py-2" href={link}>
      {title}
    </a>
  </li>
);

export default DrawerItem;
