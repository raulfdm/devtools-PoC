import { Logo } from "./logo";
import { devtools } from "./devtools";

devtools.load(console.log);

devtools.addGroup({
  label: "Feature Flags",
  items: [
    {
      id: "feature_flags.profile",
      label: "Profile",
      type: "checkbox",
      initial: false,
    },
    {
      id: "feature_flags.mouse",
      label: "Mouse support",
      type: "checkbox",
      initial: true,
    },
    {
      id: "feature_flags.player_engine",
      label: "Player Engine",
      type: "select",
      initial: "shaka",
      options: [
        { value: "shaka", label: "Shaka" },
        { value: "gluon", label: "Gluon" },
      ],
    },
  ],
});

devtools.addGroup({
  label: "Misc.",
  items: [
    {
      type: "confirmation",
      description: "Are you sure you want to do this?",
      id: "clear_storage",
      label: "Clear Storage",
    },
  ],
});

devtools.subscribe((id: string, value: any) => {
  console.log("CHANGED", id, value);
});

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  );
}
