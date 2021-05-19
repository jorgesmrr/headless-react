import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Drawer, { DrawerProps } from "../../components/surface/drawer/Drawer";

export default {
    title: "Surface/Drawer",
    component: Drawer,
};

class Toggler extends React.Component {
    state = { open: false };

    toggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className="relative">
                <Drawer
                    open={this.state.open}
                    handleClose={() => this.toggle()}
                    {...this.props}
                >
                    Content
                </Drawer>

                <button onClick={() => this.toggle()}>Show Drawer</button>
            </div>
        );
    }
}

export const Default: Story<DrawerProps> = (args) => <Toggler {...args} />;
Default.args = { background: "red", width: "5rem" };
