import classNames from "classnames";
import React, { CSSProperties } from "react";

export interface MasterDetailProps {
  master: JSX.Element;
  detail: JSX.Element;
  showMaster: boolean;
  overlayDataTestId?: string;
  masterWidth?: string;
  masterMinZIndex?: number;
  animationDuration?: string;
  onHideMaster: () => void;
}

const MasterDetail: React.FC<MasterDetailProps> = ({
  master,
  detail,
  masterWidth = "21rem",
  showMaster = true,
  overlayDataTestId,
  masterMinZIndex = 1,
  animationDuration = "250ms",
  onHideMaster,
}) => {
  const className = classNames("master-detail", {
    "master-detail--closed": !showMaster,
  });

  const style = {
    ["--overlay-z-index"]: masterMinZIndex,
    ["--master-z-index"]: masterMinZIndex + 1,
    ["--master-width"]: masterWidth,
    ["--animation-duration"]: animationDuration,
  } as CSSProperties;

  return (
    <div className={className} style={style}>
      <div className="master-detail__master">
        <div className="master-detail__master__content">{master}</div>
      </div>
      <div className="master-detail__detail">{detail}</div>
      <div
        className="master-detail__overlay"
        data-testid={overlayDataTestId}
        onClick={onHideMaster}
      />
    </div>
  );
};

export default MasterDetail;
