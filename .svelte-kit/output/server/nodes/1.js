

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.736f581d.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/stores.0e2b4c7a.js","_app/immutable/chunks/singletons.1994ffa2.js"];
export const stylesheets = [];
export const fonts = [];
