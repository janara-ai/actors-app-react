import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const TooltipComponent = ({ id, name }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  //state = {
  //     tooltipOpen: false
  //   }
  //setState => setTooltipOpen
  const toggle = () => setTooltipOpen(!tooltipOpen);
  //setState({tooltipOpen: !tooltipOpen})

  return (
    <div>
      <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>
        {name}
      </Tooltip>
    </div>
  );
};

export default TooltipComponent;
