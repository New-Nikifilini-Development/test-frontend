import Tag from "components/Tag";
import React from "react";
import { observer } from "mobx-react-lite";
import { useGlobalState } from "~/screens/globalState";
import { find } from "lodash";

interface StatusProps {
  code: string;
}

const DeliveryType = observer(
  ({ code }: StatusProps): JSX.Element => {
    const globalState = useGlobalState();
    const name = find(globalState.deliveryTypes, { code })?.name || code;

    let color: "blue" | "grey" = "blue";
    switch (code) {
      case null:
      case "nondost":
        color = "grey";
    }
    return <Tag text={name} color={color} />;
  }
);

export default DeliveryType;
