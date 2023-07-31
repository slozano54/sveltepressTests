

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7c2455a1.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/stores.c0d31453.js","_app/immutable/chunks/singletons.2c1a6812.js"];
export const stylesheets = [];
export const fonts = [];
