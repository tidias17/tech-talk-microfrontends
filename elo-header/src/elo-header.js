import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;

export const pdq = (value) => {
  console.log(`Pão de Queijo é mais gostoso que ${value}`);
};
