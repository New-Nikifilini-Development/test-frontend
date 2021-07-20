import Tag from "components/Tag";
import React from "react";
import { useGlobalState } from "~/screens/globalState";
import { find } from "lodash";
import { observer } from "mobx-react-lite";

interface StatusProps {
  code: string;
}

const ProductStatus = observer(
  ({ code }: StatusProps): JSX.Element => {
    const globalState = useGlobalState();
    const name = find(globalState.productStatuses, { code })?.name || code;

    let color: "blue" | "grey" | "green" | "red";
    switch (code) {
      case "pereshiv":
      case "kastom":
      case "brak":
      case "chistka-braka":
      case "utsenka":
        color = "red";
        break;
      case "complete":
        color = "green";
        break;
      default:
        color = "blue";
    }
    return <Tag text={name} color={color} />;
  }
);

export default ProductStatus;
