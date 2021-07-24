import { render } from "preact";
import { DevTools } from "./domain/DevTools";
import { DialogProvider } from "./domain/Dialog/dialog";

function install() {
  // add dev tools UI to the page
  const devToolsRoot = document.createElement("div");
  devToolsRoot.id = "devtools";

  document.body.appendChild(devToolsRoot);

  render(
    <DialogProvider>
      <DevTools />
    </DialogProvider>,
    devToolsRoot
  );
}

export { install };
