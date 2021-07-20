import Tag from "components/Tag";
import React from "react";
import { useGlobalState } from "~/screens/globalState";
import { find } from "lodash";
import { observer } from "mobx-react-lite";

interface StatusProps {
  code: string;
}

const OrderStatus = observer(
  ({ code }: StatusProps): JSX.Element => {
    const globalState = useGlobalState();
    const name = find(globalState.orderStatuses, { code })?.name || code;

    let color: "blue" | "grey" | "green";
    switch (code) {
      case "podtverj":
      case "opt-part1":
        color = "blue";
        break;
      case "complete":
        color = "green";
        break;
      default:
        color = "grey";
    }
    return <Tag text={name} color={color} />;
  }
);

export default OrderStatus;
