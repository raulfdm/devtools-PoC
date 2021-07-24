import { render } from "preact";
import { DevTools } from "./domain/DevTools";
import { DialogProvider } from "./domain/Dialog/dialog";
import { DialogRoot } from "./ui";
import styles from "./ui/DevToolsContainer.module.scss";

function install() {
  // add dev tools UI to the page
  const devToolsRoot = document.createElement("div");
  devToolsRoot.id = "devtools";
  devToolsRoot.className = styles.root;

  document.body.appendChild(devToolsRoot);

  render(
    <DialogProvider>
      <DevTools />
      <DialogRoot />
    </DialogProvider>,
    devToolsRoot
  );
}

export { install };
