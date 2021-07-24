import { devTools } from "../../devtools";
import { ICheckboxItemGroup } from "../../types";
import styles from "./Checkbox.module.scss";

export function Checkbox({ id, label, initial }: ICheckboxItemGroup) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={initial}
        onChange={(e) => {
          const nextState = (e.target as HTMLInputElement).checked;
          devTools.internalApi.notify(id, nextState);
        }}
      />
    </div>
  );
}
