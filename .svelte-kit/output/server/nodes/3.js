

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pv/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/3.3579ddec.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/CopyCode.svelte_svelte_type_style_lang.bf1e3042.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.e94ea7e9.js","_app/immutable/chunks/singletons.1994ffa2.js","_app/immutable/chunks/stores.0e2b4c7a.js"];
export const stylesheets = ["_app/immutable/assets/CopyCode.1ce69506.css","_app/immutable/assets/Link.0d396f12.css"];
export const fonts = [];
