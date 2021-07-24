import { IGroup } from "../../types";
import { Checkbox } from "../Checkbox";
import { Select } from "../Select";
import { Confirmation } from "../Confirmation";

import styles from "./GroupSection.module.scss";

interface IGroupSection {
  group: IGroup;
}

export function GroupSection({ group }: IGroupSection) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{group.label}</h2>
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
}
