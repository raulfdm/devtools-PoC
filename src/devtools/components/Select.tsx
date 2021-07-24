import { devTools } from "../devtools";
import { ISelectItemGroup } from "../types";

export function Select({ options, label, initial, id }: ISelectItemGroup) {
  return (
    <div>
      <label>{label}</label>
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
    </div>
  );
}
