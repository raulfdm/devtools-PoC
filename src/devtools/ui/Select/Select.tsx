import { devTools } from "../../devtools";
import { ISelectItemGroup } from "../../types";

import { GroupItemSection } from "../GroupItemSection";

export function Select({ options, label, initial, id }: ISelectItemGroup) {
  return (
    <GroupItemSection label={label}>
      <select
        value={initial}
        onChange={(e) => {
          const nextState = (e.target as HTMLInputElement).value;
          devTools.internalApi.notify(id, nextState);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </GroupItemSection>
  );
}
