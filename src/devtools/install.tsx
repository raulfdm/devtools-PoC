import { render } from "preact";
import { devTools } from "./devtools";
import { Checkbox } from "./components/Checkbox";
import { Select } from "./components/Select";

function install() {
  function DevTools() {
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
                      default:
                        return null;
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // add dev tools UI to the page

  const devToolsRoot = document.createElement("div");

  document.body.appendChild(devToolsRoot);

  render(<DevTools />, devToolsRoot);
}

export { install };
