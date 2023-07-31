

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/2.e29afe3c.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/CopyCode.svelte_svelte_type_style_lang.9a929b85.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.aa691d3b.js","_app/immutable/chunks/singletons.2c1a6812.js","_app/immutable/chunks/stores.c0d31453.js"];
export const stylesheets = ["_app/immutable/assets/CopyCode.1ce69506.css","_app/immutable/assets/Link.0d396f12.css"];
export const fonts = [];
