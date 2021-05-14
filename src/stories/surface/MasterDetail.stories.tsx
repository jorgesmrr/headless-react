import React from "react";
import { Story } from "@storybook/react/types-6-0";
import MasterDetail, {
    MasterDetailProps,
} from "../../components/surface/master-detail/MasterDetail";

export default {
    title: "Message/MasterDetail",
    component: MasterDetail,
};

const Template: Story<MasterDetailProps> = (args: MasterDetailProps) => (
    <MasterDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
    master: <div>Master</div>,
    detail: <div>Detail</div>,
    showMaster: true,
};
