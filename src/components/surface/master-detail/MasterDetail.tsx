import classNames from "classnames";
import React from "react";

export interface MasterDetailProps {
  master: JSX.Element;
  detail: JSX.Element;
  showMaster: boolean;
  overlayDataTestId?: string;
  masterWidth?: string;
  maxContentZIndex?: number;
  onHideMaster: () => void;
}

const MasterDetail: React.FC<MasterDetailProps> = ({
  master,
  detail,
  masterWidth = "21rem",
  showMaster = true,
  overlayDataTestId,
  maxContentZIndex = 1,
  onHideMaster,
}) => {
  const className = classNames("master-detail", {
    "master-detail--closed": !showMaster,
  });

  return (
    <div className={className}>
      <div
        className="master-detail__master"
        style={{
          zIndex: maxContentZIndex + 2,
          width: `min(80vw, ${masterWidth})`,
          flex: `0 0 ${masterWidth}`,
        }}
      >
        {master}
      </div>
      <div
        className="master-detail__detail"
        style={{ zIndex: maxContentZIndex }}
      >
        {detail}
      </div>
      <div
        className="master-detail__overlay"
        style={{ zIndex: maxContentZIndex + 1 }}
        data-testid={overlayDataTestId}
        onClick={onHideMaster}
      />
    </div>
  );
};

export default MasterDetail;
