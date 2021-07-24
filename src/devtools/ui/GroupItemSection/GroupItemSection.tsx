import { ComponentChildren } from "preact";
import styles from "./GroupItemSection.module.scss";

interface IGroupSectionProps {
  children: ComponentChildren;
  label: string;
}

export function GroupItemSection({ children, label }: IGroupSectionProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{label}</span>
      {children}
    </div>
  );
}
