import { devTools } from "../../devtools";
import { GroupSection } from "../../ui";

import styles from "./DevTools.module.scss";

export function DevTools() {
  const groups = devTools.internalApi.getGroups();
  return (
    /* @ts-ignore */
    <Fragment>
      <h1 className={styles.title}>DevTools</h1>
      <div className={styles.itemsWrapper}>
        {groups.map((group) => (
          <GroupSection group={group} key={group.label} />
        ))}
      </div>
      {/* @ts-ignore */}
    </Fragment>
  );
}
