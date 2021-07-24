import { devTools } from "../devtools";
import { GroupSection } from "../ui";

export function DevTools() {
  const groups = devTools.internalApi.getGroups();
  return (
    /* @ts-ignore */
    <Fragment>
      <h1>DevTools</h1>
      <div>
        {groups.map((group) => (
          <GroupSection group={group} key={group.label} />
        ))}
      </div>
      {/* @ts-ignore */}
    </Fragment>
  );
}
