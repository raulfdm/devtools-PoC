import { render } from "preact";
import { DevTools } from "./domain/DevTools";

function install() {
  // add dev tools UI to the page

  const devToolsRoot = document.createElement("div");
  devToolsRoot.id = "devtools";

  document.body.appendChild(devToolsRoot);

  render(<DevTools />, devToolsRoot);
}

export { install };
