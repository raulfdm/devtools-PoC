import { devTools } from "../../devtools";
import { useDialog } from "../../hooks/useDialog";
import { IConfirmItemGroup } from "../../types";

import { Dialog } from "../Dialog";

export function Confirmation({ description, label, id }: IConfirmItemGroup) {
  const { closeDialog, isOpen, openDialog } = useDialog();

  return (
    <div>
      <h3>{label}</h3>
      <button onClick={openDialog}>Confirm</button>
      {isOpen && (
        <Dialog
          onConfirm={() => {
            devTools.internalApi.notify(id, true);
            closeDialog();
          }}
          onCancel={() => {
            closeDialog();
          }}
          description={description}
        />
      )}
    </div>
  );
}
