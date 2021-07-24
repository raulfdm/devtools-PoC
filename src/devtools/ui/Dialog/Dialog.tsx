import { createPortal } from "preact/compat";

interface IDialogProps {
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ROOT_ID = "dialog";

export function Dialog({ onConfirm, description }: IDialogProps) {
  const container = document.getElementById(ROOT_ID);

  if (container === null) {
    throw new Error(
      `#${ROOT_ID} element is not in the DOM. Please import <DialogRoot /> at the top level application`
    );
  }

  return createPortal(
    /* @ts-ignore */
    <Fragment>
      <h2>Confirmation</h2>
      <p>{description}</p>
      <div>
        <button>Cancel</button>
        <button>Confirm</button>
      </div>
      {/* @ts-ignore */}
    </Fragment>,
    container
  );
}

export function DialogRoot() {
  return <div id={ROOT_ID} />;
}
