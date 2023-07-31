import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.e4369274.js","_app/immutable/chunks/0.307124d3.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.ac4064c6.js","_app/immutable/chunks/singletons.889455b1.js","_app/immutable/chunks/stores.81a2e526.js"];
export const stylesheets = ["_app/immutable/assets/0.8ac63096.css","_app/immutable/assets/Link.0d396f12.css","_app/immutable/assets/ReloadPrompt.6625b86a.css"];
export const fonts = ["_app/immutable/assets/Dank Mono Regular.20068931.otf","_app/immutable/assets/Dank Mono Italic.53f4f38a.otf"];
