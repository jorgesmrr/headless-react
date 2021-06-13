import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import MasterDetail, {
  MasterDetailProps,
} from "../../components/surface/master-detail/MasterDetail";

export default {
  title: "Surface/MasterDetail",
  component: MasterDetail,
};

const Template: Story<MasterDetailProps> = (args: MasterDetailProps) => {
  const [isShowingMaster, setShowingMaster] = useState(false);

  const master = (
    <div style={{ backgroundColor: "yellow", padding: "1rem" }}>Master</div>
  );
  const detail = (
    <div style={{ backgroundColor: "grey", padding: "1rem" }}>
      <p>Detail</p>
      <p>
        <button onClick={() => setShowingMaster(!isShowingMaster)}>
          Toggle Master
        </button>
      </p>
    </div>
  );

  return (
    <div style={{ height: "100vh" }}>
      <MasterDetail
        {...args}
        master={master}
        detail={detail}
        showMaster={isShowingMaster}
        onHideMaster={() => setShowingMaster(false)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  showMaster: true,
  masterWidth: "30rem",
};
