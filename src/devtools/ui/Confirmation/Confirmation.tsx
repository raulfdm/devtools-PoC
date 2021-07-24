import { useState } from "preact/hooks";
import { IConfirmItemGroup } from "../../types";

import { Dialog } from "../Dialog";

export function Confirmation({ description, label }: IConfirmItemGroup) {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  function handleClick() {
    setIsPortalOpen(!isPortalOpen);
  }

  return (
    <div>
      <h3>{label}</h3>
      <button onClick={handleClick}>Create Portal</button>
      {isPortalOpen && (
        <Dialog
          onConfirm={() => {
            setIsPortalOpen(false);
          }}
          onCancel={() => {
            setIsPortalOpen(false);
          }}
          description={description}
        />
      )}
    </div>
  );
}
