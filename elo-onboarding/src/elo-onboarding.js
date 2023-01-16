import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const statesOnboarding = async () => {
  return await fetch("https://api.tidias.com.br/generals/states-brazil").then(
    (data) => data.json()
  );
};

export const { bootstrap, mount, unmount } = svelteLifecycles;
