import React from "react";
import { Story } from "@storybook/react/types-6-0";
import MasterDetail, {
    MasterDetailProps,
} from "../../components/surface/master-detail/MasterDetail";

export default {
    title: "Surface/MasterDetail",
    component: MasterDetail,
};

const Template: Story<MasterDetailProps> = (args: MasterDetailProps) => (
    <div style={{ height: "100vh" }}>
        <MasterDetail {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    master: <div style={{ backgroundColor: "yellow" }}>Master</div>,
    detail: <div style={{ backgroundColor: "grey" }}>Detail</div>,
    showMaster: true,
    masterWidth: "30rem",
};
