import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { P as PageLayout } from "../../chunks/CopyCode.svelte_svelte_type_style_lang.js";
import "../../chunks/Link.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fm = {
    "pageType": "md",
    "lastUpdate": "Invalid Date",
    "title": "Welcome to Sveltepress",
    "heroImage": "/sveltepress@3x.png",
    "tagline": "A simple, easy to use content centered site build tool with the full power of Sveltekit.",
    "actions": [
      {
        "label": "View on github",
        "type": "primary",
        "to": "https://github.com/Blackman99/sveltepress",
        "external": true
      }
    ],
    "features": [
      {
        "title": "Svelte in Markdown",
        "description": "Feel free to use svelte in markdown. Explore infinite possibilities.",
        "link": "/pv/"
      }
    ],
    "anchors": []
  };
  return `${validate_component(PageLayout, "PageLayout").$$render($$result, { fm }, {}, {})}`;
});
export {
  Page as default
};
