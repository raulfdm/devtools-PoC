import { devTools } from "../../devtools";
import { useDialog } from "../../hooks/useDialog";
import { IConfirmItemGroup } from "../../types";
import { Dialog } from "../Dialog";

import { GroupItemSection } from "../GroupItemSection";

export function Confirmation({ description, label, id }: IConfirmItemGroup) {
  const { closeDialog, isOpen, openDialog } = useDialog();

  function handlesOnConfirm() {
    devTools.internalApi.notify(id, true);
    closeDialog();
  }

  return (
    <GroupItemSection label={label}>
      <button onClick={openDialog}>Confirm</button>
      {isOpen && (
        <Dialog
          onConfirm={handlesOnConfirm}
          onCancel={closeDialog}
          description={description}
        />
      )}
    </GroupItemSection>
  );
}
