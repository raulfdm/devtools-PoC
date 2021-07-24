import { createContext, ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { DialogRoot } from "../../ui";

export interface IDialogContext {
  isOpen: boolean;
  toggleDialog: () => void;
  openDialog: () => void;
  closeDialog: () => void;
}

export const dialogContext = createContext<IDialogContext | null>(null);

export function DialogProvider({ children }: { children: ComponentChildren }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dialogContext.Provider
      value={{
        isOpen,
        toggleDialog,
        openDialog,
        closeDialog,
      }}
    >
      {children}
    </dialogContext.Provider>
  );

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }
}
