import { useContext } from "preact/hooks";
import { dialogContext, IDialogContext } from "../domain/Dialog/dialog";

export function useDialog(): IDialogContext {
  const context = useContext(dialogContext);

  if (context === null) {
    throw new Error("useDialog hook needs to be used under <DialogProvider>");
  }

  return context;
}
