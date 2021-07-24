import { devTools } from "../devtools";
import { Checkbox, Select, Confirmation, DialogRoot } from "../ui";

export function DevTools() {
  return (
    <div>
      <h1>DevTools</h1>
      <div>
        <div>
          {devTools.internalApi.getGroups().map((group) => {
            return (
              <div>
                <h2>{group.label}</h2>
                {group.items.map((item) => {
                  switch (item.type) {
                    case "checkbox":
                      return <Checkbox {...item} />;
                    case "select":
                      return <Select {...item} />;
                    case "confirmation":
                      return <Confirmation {...item} />;
                    default:
                      return null;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
      <DialogRoot />
    </div>
  );
}
