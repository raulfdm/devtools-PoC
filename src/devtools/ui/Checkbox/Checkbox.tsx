import { devTools } from "../../devtools";
import { ICheckboxItemGroup } from "../../types";
import styles from "./Checkbox.module.scss";

import { GroupItemSection } from "../GroupItemSection";

export function Checkbox({ id, label, initial }: ICheckboxItemGroup) {
  return (
    <GroupItemSection label={label}>
      <input
        type="checkbox"
        checked={initial}
        onChange={(e) => {
          const nextState = (e.target as HTMLInputElement).checked;
          devTools.internalApi.notify(id, nextState);
        }}
      />
    </GroupItemSection>
  );
}
