import { createPortal } from "preact/compat";
import styles from "./Dialog.module.scss";
import classNames from "classnames";
import { useDialog } from "../../hooks/useDialog";

interface IDialogProps {
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ROOT_ID = "dialog";

export function Dialog({ onConfirm, description, onCancel }: IDialogProps) {
  const container = document.getElementById(ROOT_ID);

  if (container === null) {
    throw new Error(
      `#${ROOT_ID} element is not in the DOM. Please import <DialogRoot /> at the top level application`
    );
  }

  return createPortal(
    <div className={styles.confirmationWrapper}>
      <h2 className={styles.title}>Confirmation</h2>
      <p>{description}</p>
      <div className={styles.actionsWrapper}>
        <button className={classNames(styles.actionButton)} onClick={onCancel}>
          Cancel
        </button>
        <button
          className={classNames(styles.actionButton, styles.confirmButton)}
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>,
    container
  );
}

export function DialogRoot() {
  const { isOpen } = useDialog();
  return (
    <div
      id={ROOT_ID}
      className={classNames(styles.dialogRoot, isOpen && styles.dialogRootOpen)}
    />
  );
}
